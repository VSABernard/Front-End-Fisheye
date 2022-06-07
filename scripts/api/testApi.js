import { Api } from '../api/Api.js'

class TestApi {
    constructor() {
        this.api = new Api('./data/photographers.json') 
    }
    async testGetPhotographers(){
        const photographers = await this.api.getPhotographer()
        console.log('test api photographers : ')        
        console.table(photographers)
    }    
    async testGetPhotographer(idPhotographer){
        const photographer = await this.api.getPhotographer(idPhotographer)
        console.log('test api photographer 82 : ')        
        console.table(photographer)
    }
    async testGetMedias(){
        const medias = await this.api.getMedias()
        console.log('test api medias : ')        
        console.table(medias)
    }
    async testGetMediasByPhotographerId(idPhotographer){
        const medias = await this.api.getMediasByPhotographer(idPhotographer)
        console.log('test api media of photographer 925 : ')        
        console.table(medias)
    }
}

const testApi = new TestApi()
testApi.testGetPhotographers()
testApi.testGetPhotographer(82)
testApi.testGetMedias()
testApi.testGetMediasByPhotographerId(925)
