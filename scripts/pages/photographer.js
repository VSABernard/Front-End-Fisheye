import { PhotographerFactory } from '../factories/photographerFactory.js'
import { MediaFactory } from '../factories/mediaFactory.js'
import { Api } from '../api/Api.js'
import { ContactCard } from '../templates/contactCard.js'
import { PriceCard } from '../templates/mediaCard.js'
import { ImageCard, VideoCard } from '../templates/mediaCard.js'
import { imageCardWithLightbox } from '../decorators/lightBox.js'

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

        // Affichage le prix journalier du photographe   
        this.displayPrice(photographerData)
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
            .forEach(mediasModel => {
                let template = null
                if (mediasModel.image != undefined) {  
                    template =  imageCardWithLightbox(new ImageCard(mediasModel))                
                } else {
                    template = new VideoCard(mediasModel)
                }   
                this.$mediasWrapper.appendChild(
                    template.createMediaPage()
                )
            })        
    }  
    
    // Afficher le banner du prix journalier
    async displayPrice(mediasData) {
        const mediasModel = mediasData.map(media => new MediaFactory (media, 'Media', this.$photographer))

        mediasModel
            .forEach(mediasModel => {
                const template = new PriceCard(mediasModel)
                this.$mediasWrapper.appendChild(
                    template.createPriceCard()
                )
            })
    }
}

const appMedia = new AppMedia()
appMedia.init()