import { photographerFactory } from '../factories/photographer.js'

async function getPhotographers() {
    // Récupérer les datas du JSON avec fetch
    const photographers = await fetch('../../data/photographers.json')
        .then(res => res.json())
        .then(res => res.photographers)
        .catch(err => console.log('an error occurs', err))
    console.log ('photographers :' + photographers)
    console.table (photographers)
    // et bien retourner le tableau photographers seulement une fois
    return ({photographers: [...photographers]})
}

async function displayData(photographers) {
    console.log ('photographers :' + photographers)
    console.table (photographers)
    const photographersSection = document.querySelector('.photographer_section')
    console.log ('photographersSection :' + photographersSection)
    photographers
        .forEach((photographer) => {
            const photographerModel = photographerFactory(photographer)
            console.log ('photographerModel :' + photographerModel)
            const userCardDOM = photographerModel.getUserCardDOM()
            console.log ('userCardDOM :' + userCardDOM)
            photographersSection.appendChild(userCardDOM)
        })
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers()
    console.log ('{ photographers } : '+ { photographers })
    displayData(photographers)
}

init()
