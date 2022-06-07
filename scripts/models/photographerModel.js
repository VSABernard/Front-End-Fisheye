class PhotographerModel {
    constructor(data) {
        this._portrait = data.portrait
        this._name = data.name
        this._id = data.id 
        this._city = data.city
        this._country = data.country 
        this._tagline = data.tagline
        this._price = data.price  
    }

    get portrait() {
        return `/assets/photographers/${this._portrait}`
    }

    get name() {
        return this._name
    }

    get id() {
        return this._id
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