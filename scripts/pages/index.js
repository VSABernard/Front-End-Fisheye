import { PhotographerFactory } from '../factories/photographerFactory.js'
import { Api } from '../api/Api.js'
import { UserCard } from '../templates/userCard.js'

class AppPhotographer {

    constructor() {
        this.api = new Api('./data/photographers.json') 
        this.$photographersWrapper = document.querySelector('.photographer_section')
    }

    async init() {
        // Récupèrer les datas des photographes
        const photographersData = await this.api.getPhotographers()       
        this.displayData(photographersData)
    }

    async displayData(photographersData) {
        const photographersModel = photographersData.map(photographer => new PhotographerFactory (photographer, 'User'))
        
        photographersModel
            .forEach(photographersModel => {
                const template = new UserCard(photographersModel)
                this.$photographersWrapper.appendChild(
                    template.createUserCard()
                )
            })
    }    
}

const appPhotographer = new AppPhotographer()
appPhotographer.init()