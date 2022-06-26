import { PhotographerFactory } from '../factories/photographerFactory.js'
import { MediaFactory } from '../factories/mediaFactory.js'
import { Api } from '../api/Api.js'
import { ContactCard } from '../templates/contactCard.js'
import { MediasCard } from '../templates/mediaCard.js'
import { FilterCard } from '../templates/mediaCard.js'
import { FooterCard } from '../templates/mediaCard.js'
import {LightboxModal} from '../templates/lightboxModal.js' 

//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams
let id = params.get('id')

let idPhotographer = parseInt(id)
console.log('id photographer :' + idPhotographer)

class AppMedia {
    constructor() {
        this.api = new Api('./data/photographers.json') 
        this.$photographersWrapper = document.querySelector('.photograph-header')
        this.$mediasWrapper = document.querySelector('.medias-content')
        this.$photographer = {}
        this.$photographerName = document.querySelector('#photographer-name')
        this.$sumLikes = 0
        this.$mediasData
    }
    async init() {
        // Récupère les medias des photographes

        // Affichage du header du photographe
        const photographerData = await this.api.getPhotographer(idPhotographer)       
        this.displayPhotographer(photographerData)

        // Affichage des medias du photographe
        this.$mediasData = await this.api.getMediasByPhotographer(idPhotographer)
        console.log ('mediasData : '+ this.$mediasData )
        this.displayMedias(this.$mediasData)

        // Affichage du filtre du photographe   
        this.displayFormFilter()

        // Affichage du footer du photographe   
        this.displayFooter(photographerData)

        // Affichege des likes total
        this.displayTotalLikes()       
    }
    
    // Afficher les détails du photographe
    async displayPhotographer(photographerData) {
        console.log ('display photographer')
        console.log ('photographerData :')
        console.table (photographerData)

        const photographersModel = photographerData.map(photographer => new PhotographerFactory (photographer, 'User'))
        this.$photographer = photographersModel[0]
        console.log ('photographersModel :' + photographersModel)

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
        console.log ('mediasData :' + mediasData)
        console.table (mediasData)    
        
        const mediasModel = mediasData.map(media => new MediaFactory (media, 'Media', this.$photographer))
        console.log ('mediasModel :')
        console.table (mediasModel)

        mediasModel
            .forEach((mediaModel, index) => {
                const template = new MediasCard(mediaModel)
                this.$mediasWrapper.appendChild(
                    template.createMediaPage()
                )

                const media = document.getElementById(mediaModel.id)     //Afficher chaque media selon son id

                media.addEventListener('click', () => {   
                    console.log('click to open the lightbox!')
                    const lightboxMedia = new LightboxModal(template._media, mediasModel, index)
                    lightboxMedia.render()
                }) 
                
                // L'incrémentation et décrementation du bouton 'LIKE'
                // dataLike : le nombre de likes dans le JSon
                // currentLike : le nombre de like qui augmente ou descend après chaque "click"
                // sumLikes : le nombre des likes totals
                
                let button = document.getElementById('heart-'+ mediaModel.id)
                let likeField = document.querySelector('#like-'+ mediaModel.id)
                let currentLike = parseInt(likeField.innerHTML) 
                const dataLike = parseInt(mediaModel.likes)

                this.$sumLikes += dataLike

                button.addEventListener('click',() => { 
                    if (dataLike === currentLike) {
                        currentLike += 1 
                        this.$sumLikes += 1                                 // Le nombre de total likes dans footer
                    } else {
                        currentLike -= 1    
                        this.$sumLikes -= 1                                 // Le nombre de total likes dans footer
                    } 
                    likeField.innerHTML = '' + currentLike
                    console.log('click on like :' + currentLike)
                    this.displayTotalLikes()                                // Mettre à jour l'affichage des likes
                })
            })
    }  

    // Aficher le nombre total des likes au footer
    async displayTotalLikes() {
        let totalLikes = document.getElementById('total-likes')
        totalLikes.innerHTML = this.$sumLikes + ''
    }

    // Afficher le banner du filter
    async displayFormFilter() {        
        const template = new FilterCard()
        this.$mediasWrapper.appendChild(
            template.createFilterCard()
        )
    }
        
    // Afficher le banner du footer
    async displayFooter(mediasData) {
        const mediasModel = mediasData.map(media => new MediaFactory (media, 'Media', this.$photographer))
        const template = new FooterCard(mediasModel[0])
        this.$mediasWrapper.appendChild(
            template.createFooterCard()
        )
    }
}

const appMedia = new AppMedia()
appMedia.init()