import { photographerFactory } from '../factories/photographer.js'
import { Api } from '../api/Api.js'

//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams
let id = params.get('id')

console.log('id :' + id)

class AppMedia {
    constructor() {
        this.api = new Api('./data/photographers.json') 
    }
    async init() {
        // Récupère les medias des photographes
        const { media } = await this.api.getMedias()
        console.log ('{ media } : '+ { media })
        this.displayMedias(media)
    }
    async displayMedias(media) {
        console.log ('media :' + media)
        console.table (media)
        const photographersHeader = document.querySelector('.photographer-header')
        console.log ('photographersHeader :' + photographersHeader)
        media
            .forEach((media) => {
                const mediaModel = photographerFactory(media)
                console.log ('photographerModel :' + mediaModel)
                const mediaCardDOM = mediaModel.getMediaCardDOM()
                console.log ('contactCardDOM :' + mediaCardDOM)
                photographersHeader.appendChild(mediaCardDOM)
            }) 
    }
}

const appMedia = new AppMedia()
appMedia.init()