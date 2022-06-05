class PhotographerModel {
    constructor(data) {
        this._name = data.name
        this._id = data._id
        this._city = data.city
        this._country = data.country 
        this._tagline = data.tagline
        this._price = data.price 
        this._portrait = data.portrait
    }
    get portrait() {
        return `/assets/photographers/${this._portrait}`
    }

    get name() {
        return this._name
    }
    
    get city() {
        return this._city
    }

    get country() {
        return this._country
    }

    get tagline() {
        return this._tagline
    }

    get price() {
        return `${this._price} €/jour`
    }
} 

export {PhotographerModel}