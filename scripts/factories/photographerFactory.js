import {PhotographerModel} from '../models/photographerModel.js'

class PhotographerFactory {
    constructor(data, type) {
        if (type === 'User') {
            return new PhotographerModel(data)
        } else {
            throw 'Unknown type format'
        }
    }
}

export { PhotographerFactory }