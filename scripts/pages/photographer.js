import { photographerFactory } from '../factories/photographer.js'

//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams
let id = params.get('id')

console.log('id :' + id)

async function getMedias() {
    // Récupérer les datas du JSON avec fetch
    const medias = await fetch('./data/photographers.json')
        .then(res => res.json())
        .then(res => res.media)
        .catch(err => console.log('an error occurs', err))
    console.log ('media :' + medias)
    console.table (medias)
    return ({media: [...medias]})
}

async function displayMedias(media) {
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

async function init() {
    // Récupère les medias des photographes
    const { media } = await getMedias()
    console.log ('{ media } : '+ { media })
   // displayContact()
    displayMedias(media)
}

init()