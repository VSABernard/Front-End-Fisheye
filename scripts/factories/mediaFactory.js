import { MediaModel } from '../models/mediaModel.js'

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