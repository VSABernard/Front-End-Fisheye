class MediaModel {
    constructor(data, photographer) {             
        this._title = data.title
        this._image = data.image
        this._video = data.video  
        this._likes = data.likes  
        this._date = data.date 
        this._price = data.price
        this._portrait = data.portrait
        this._photographer = photographer
    }

    get title() {
        return this._title
    }

    get image() {
        if (this._image === undefined) {
            return undefined
        }
        return `/assets/images/photos/${this._photographer.firstName}/${this._image}`
    }

    get video() {
        if (this._video === undefined) {
            return undefined
        }
        return `/assets/images/photos/${this._photographer.firstName}/${this._video}`
    }

    get likes() {
        return this._likes
    }

    get date() {
        return this._date
    }

    get price() {
        return `${this._price} €/jour`
    }

    get portrait() {
        if (this._portrait === undefined) {
            return undefined
        }
        return `${this._photographer.firstName}/${this._portrait}`
    }

    get photographer() {
        return this._photographer
    }
} 

export { MediaModel }