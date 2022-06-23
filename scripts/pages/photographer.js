import { PhotographerFactory } from '../factories/photographerFactory.js'
import { MediaFactory } from '../factories/mediaFactory.js'
import { Api } from '../api/Api.js'
import { ContactCard } from '../templates/contactCard.js'
import { FooterCard } from '../templates/mediaCard.js'
import { MediasCard } from '../templates/mediaCard.js'
//import { mediaCardWithLightbox } from '../decorators/lightBox.js'
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
    }
    async init() {
        // Récupère les medias des photographes

        // Affichage du header du photographe
        const photographerData = await this.api.getPhotographer(idPhotographer)       
        this.displayPhotographer(photographerData)

        // Affichage des medias du photographe
        const mediasData = await this.api.getMediasByPhotographer(idPhotographer)
        console.log ('mediasData : '+ mediasData )
        this.displayMedias(mediasData)

        // Affichage du footer du photographe   
        this.displayFooter(photographerData)
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
            })        
    }  
    
    // Afficher le banner du footer
    async displayFooter(mediasData) {
        const mediasModel = mediasData.map(media => new MediaFactory (media, 'Media', this.$photographer))

        mediasModel
            .forEach(mediasModel => {
                const template = new FooterCard(mediasModel)
                this.$mediasWrapper.appendChild(
                    template.createFooterCard()
                )
            })
    }
}

const appMedia = new AppMedia()
appMedia.init()