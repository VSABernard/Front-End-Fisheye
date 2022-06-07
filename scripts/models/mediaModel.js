class MediaModel {
    constructor(data) {             
        this._title = data.title
        this._image = data.image
        this._video = data.video  
        this._likes = data.likes  
        this._date = data.data 
    }

    get title() {
        return this._title
    }

    get image() {
        return `/assets/photos/${this._image}`
    }

    get video() {
        return `/assets/photos/${this._video}`
    }

    get likes() {
        return this._likes
    }
} 

export { MediaModel }