import { PhotographerFactory } from '../factories/photographerFactory.js'
import { MediaFactory } from '../factories/mediaFactory.js'
import { Api } from '../api/Api.js'
import { ContactCard } from '../templates/contactCard.js'
import { MediasCard, FilterCard, FooterCard } from '../templates/mediaCard.js'
import {LightboxModal} from '../templates/lightboxModal.js' 

//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams
let id = params.get('id')

let idPhotographer = parseInt(id)

class AppMedia {
    constructor() {
        this.api = new Api('./data/photographers.json') 
        this.$mainWrapper = document.querySelector('#main')
        this.$filterWrapper = document.querySelector('.filter-content')
        this.$photographersWrapper = document.querySelector('.photograph-header')
        this.$mediasWrapper = document.querySelector('.medias-content')
        this.$photographer = {}
        this.$photographerName = document.querySelector('#photographer-name')
        this.$sumLikes = 0
        this.$mediasData = null
    }
    async init() {
        // Récupère les medias des photographes

        // Affichage du header du photographe
        const photographerData = await this.api.getPhotographer(idPhotographer)       
        this.displayPhotographer(photographerData)

        // Affichage des medias du photographe
        this.$mediasData = await this.api.getMediasByPhotographer(idPhotographer)
        this.displayMedias(this.$mediasData)

        // Affichage du filtre du photographe   
        this.displayFormFilter()

        // Trier par défaut des médias par la popularité
        this.filterMedia('popularity')

        // Affichage du footer du photographe   
        this.displayFooter(photographerData)

        // Affichege des likes total
        this.displayTotalLikes()       
    }
    
    // Afficher les détails du photographe
    async displayPhotographer(photographerData) {
        const photographersModel = photographerData.map(photographer => new PhotographerFactory (photographer, 'User'))
        this.$photographer = photographersModel[0]                  // le tableau ne contient qu'un element, c'est pourquoi il faut utiliser [0] pour y accéder

        photographersModel
            .forEach(photographerModel => {
                const template = new ContactCard(photographerModel)
                this.$photographersWrapper.appendChild(
                    template.createContactPage()
                )
            })
        this.$photographerName.innerHTML = this.$photographer.name       
    }   

    // Afficher la liste de l'album photos et vidéo du photographe
    async displayMedias(mediasData) {
        this.$mediasWrapper.replaceChildren()                               // Enlever le contenu avant d'afficher un nouveau contenu
        this.$sumLikes = 0                                                  // Remettre à zéro le compteur des likes 
        
        const mediasModel = mediasData.map(media => new MediaFactory (media, 'Media', this.$photographer))

        mediasModel
            .forEach((mediaModel, index) => {
                const template = new MediasCard(mediaModel)
                this.$mediasWrapper.appendChild(
                    template.createMediaPage()
                )

                const media = document.getElementById(mediaModel.id)     //Afficher chaque media selon son id

                media.addEventListener('click', () => {   
                    const lightboxMedia = new LightboxModal(template._media, mediasModel, index)
                    lightboxMedia.render()
                }) 

                // L'incrémentation et décrementation du bouton 'LIKE'
                // dataLike : le nombre de likes dans le JSon
                // currentLike : le nombre de like qui augmente ou descend après chaque "click"
                // sumLikes : le nombre des likes totals
                
                let buttonLike = document.getElementById('heart-'+ mediaModel.id)
                const dataLike = parseInt(mediaModel.likes)                

                this.$sumLikes += dataLike

                buttonLike.addEventListener('click', () => { 
                    this.updateLikeButton(mediaModel, dataLike)                    
                })
            })
    }  

    // La méthode globale pour l'incrémentation et décrementation du bouton 'LIKE'
    updateLikeButton (mediaModel, dataLike) {
        
        let likeField = document.querySelector('#like-'+ mediaModel.id)                
        let currentLike = parseInt(likeField.innerHTML) 

        if (dataLike === currentLike)  {
            currentLike += 1 
            this.$sumLikes += 1                                  // Le nombre de total likes dans footer

        } else {
            currentLike -= 1    
            this.$sumLikes -= 1                                 // Le nombre de total likes dans footer            
        } 

        likeField.innerHTML = '' + currentLike
        this.displayTotalLikes()                                // Mettre à jour l'affichage des likes
    }

    // Aficher le nombre total des likes au footer
    async displayTotalLikes() {
        let totalLikes = document.getElementById('total-likes')
        totalLikes.innerHTML = this.$sumLikes + ''
    }

    // Afficher le banner du filter
    async displayFormFilter() {        
        const template = new FilterCard()
        this.$filterWrapper.appendChild(
            template.createFilterCard()
        )

        let select = document.getElementById('form-select')
        let chevron = document.querySelector('#chevron')

        chevron.addEventListener('keydown',function(event){
            setTimeout(function(){
                if(event.preventDefault){
                    return
                }
            })
        })

        select.addEventListener('click', () => {
            chevron.classList.toggle('active')
        })
        
        select.addEventListener('change', (evt) => {   
            let choice = evt.target.value                           // value = la valeur de l'option selectionnée (titre, date, popularity)    
            
            // Les functions de comparaison qui permet de trier 
            this.filterMedia(choice)
        })        
    }

    // Trier les medias selon un choix : titre, date, popularité
        
    filterMedia(choice) {
        const comparatorTitle = (a, b) => {
            return a.title.localeCompare(b.title)
        }
        const comparatorDate = (a, b) => {
            return a.date.localeCompare(b.date)
        }
        const comparatorLike = (a, b) => {
            return b.likes - a.likes
        }

        // Les conditions de tri
        switch (choice) {
        case 'title': this.$mediasData.sort(comparatorTitle)
            break
        case 'date': this.$mediasData.sort(comparatorDate)
            break
        case 'popularity': this.$mediasData.sort(comparatorLike)
            break
        default: this.$mediasData.sort(comparatorLike)
            break
        }
        console.log('media trie par :' + choice)
        console.table(this.$mediasData)
        this.displayMedias(this.$mediasData)
    }

    // Afficher le banner du footer
    async displayFooter(mediasData) {
        const mediasModel = mediasData.map(media => new MediaFactory (media, 'Media', this.$photographer))
        const template = new FooterCard(mediasModel[0])
        this.$mainWrapper.appendChild(
            template.createFooterCard()
        )
    }
}

const appMedia = new AppMedia()
appMedia.init()