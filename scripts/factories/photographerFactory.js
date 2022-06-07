import { MediaModel } from '../models/mediaModel.js'
import {PhotographerModel} from '../models/photographerModel.js'

class PhotographerFactory {
    constructor(data, type) {
        if (type === 'User') {
            return new PhotographerModel(data)
        } else if (type === 'Media') {
            return new MediaModel(data)
        } else {
            throw 'Unknown type format'
        }
        
    }
}

export { PhotographerFactory }