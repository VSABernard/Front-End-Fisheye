class MediaModel {
    constructor(data, photographer) {             
        this._title = data.title
        this._image = data.image
        this._video = data.video  
        this._likes = data.likes  
        this._date = data.data 
        this._photographer = photographer
        
        // console.log('this photographer :')
        // console.table(this._photographer)
        // console.log('photographer.name : ' + photographer.name)
        // console.log('this.photographer.name : ' + this._photographer.name)
    }

    get title() {
        return this._title
    }

    get image() {
        return `/assets/images/photos/${this._photographer.firstName}/${this._image}`
    }

    get video() {
        return `/assets/images/photos/${this._photographer.firstName}/${this._video}`
    }

    get likes() {
        return this._likes
    }

    get photographer() {
        return this._photographer
    }
} 

export { MediaModel }