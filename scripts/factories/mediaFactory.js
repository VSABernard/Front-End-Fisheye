import { MediaModel } from '../models/mediaModel.js'

// Transformer les données de Json en modèle

class MediaFactory {
    constructor(data, type, photographerModel) {
        console.log (data.image)
        console.log(data.video)
        
        if (type === 'Media') {
            return new MediaModel(data, photographerModel)
        } else {
            throw 'Unknown type format'
        }        
    }
}

export { MediaFactory }