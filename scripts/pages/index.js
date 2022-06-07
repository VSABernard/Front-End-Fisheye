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
        console.log('init')
        const photographersData = await this.api.getPhotographers()       
        this.displayData(photographersData)
    }

    async displayData(photographersData) {
        console.log('display data')
        console.log ('photographersData :')
        console.table (photographersData)
     
        const photographersModel = photographersData.map(photographer => new PhotographerFactory (photographer, 'User'))
        console.log ('photographersModel :')
        console.table (photographersModel)

        photographersModel
            .forEach(photographersModel => {
                const template = new UserCard(photographersModel)
                this.$photographersWrapper.appendChild(
                    template.createUserCard()
                )
            })
    /*
        photographers
            .forEach((photographer) => {
                


                
                const photographerModel = photographerFactory(photographer)
                console.log ('photographerModel :' + photographerModel)
                const userCardDOM = photographerModel.getUserCardDOM()
                console.log ('userCardDOM :' + userCardDOM)
                photographersSection.appendChild(userCardDOM)
                
            })*/
    }    

    async main() {
       
     
    }
}

const appPhotographer = new AppPhotographer()
appPhotographer.init()