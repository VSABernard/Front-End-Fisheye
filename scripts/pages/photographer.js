import { PhotographerFactory } from '../factories/photographerFactory.js'
import { Api } from '../api/Api.js'
import { ContactCard } from '../templates/contactCard.js'
// import { PhotographerPage } from '../templates/photographerPage.js'
// import { PhotographerPage } from '../templates/photographerPage.js'

//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams
let id = params.get('id')

let idPhotographer = parseInt(id)
console.log('id photographer :' + idPhotographer)

class AppMedia {
    constructor() {
        this.api = new Api('./data/photographers.json') 
        this.$photographersWrapper = document.querySelector('.photograph-header')
    }
    async init() {
        // Récupère les medias des photographes

        // Affichage du header du photographe
        const photographerData = await this.api.getPhotographer(idPhotographer)       
        this.displayPhotographer(photographerData)


        // Affichage des medias du photographe
        //const { mediasData } = await this.api.getMedias()
        //console.log ('{ mediasData } : '+ { mediasData })
        //this.displayMedias(mediasData)
    }
    
    async displayPhotographer(photographerData) {
        console.log ('display photographer')
        console.log ('photographerData :')
        console.table (photographerData)

        const photographersModel = photographerData.map(photographer => new PhotographerFactory (photographer, 'User'))
        console.log ('photographersModel :' + photographersModel)
        
        photographersModel
            .forEach(photographerModel => {
                const template = new ContactCard(photographerModel)
                this.$photographersWrapper.appendChild(
                    template.createContactPage()
                )
            })
    }   


    async displayMedias(mediasData) {
        console.log ('mediasData :' + mediasData)
        console.table (mediasData)    
        
        const mediasModel = mediasData.map(media => new PhotographerFactory (media, 'Media'))
        console.log ('mediasModel :')
        console.table (mediasModel)

        // mediasModel
        //     .forEach(mediasModel => {
        //        const template = new MediaCard(mediasModel)
        //        this.$mediassWrapper.appendChild(
        //         template.createMediaCard()
        //     )
        //     })

         
    }   
    
    
    
}


const appMedia = new AppMedia()
appMedia.init()