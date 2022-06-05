import { photographerFactory } from '../factories/photographer.js'
import { Api } from '../api/Api.js'

class AppPhotographer {
    constructor() {
        this.api = new Api('./data/photographers.json') 
    }
    async init() {
        // Récupèrer les datas des photographes
        const { photographers } = await this.api.getPhotographers()
        console.log ('{ photographers } : '+ { photographers })
        this.displayData(photographers)
    }
    async displayData(photographers) {
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
}

const appPhotographer = new AppPhotographer()
appPhotographer.init()