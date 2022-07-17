import { MediaModel } from '../models/mediaModel.js'

// Transformer les données de Json en modèle

class MediaFactory {
    constructor(data, type, photographerModel) {
        if (type === 'Media') {
            return new MediaModel(data, photographerModel)
        } else {
            throw 'Unknown type format'
        }        
    }
}

export { MediaFactory }