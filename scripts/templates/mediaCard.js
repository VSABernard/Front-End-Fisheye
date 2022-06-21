// La mise en place des photos et vidéo du photographe

class ImageCard {
    constructor(currentMedia) {
        this._media = currentMedia 
        this.$wrapper = document.createElement('section')
        this.$wrapper.classList.add('medias-list')
    }

    get media() {
        return this._media
    }
    
    createMediaPage() {
        const imageCard = `         
         <section class="medias-photographer" role="dialog" aria-labelledby="dialog-image" 
            aria-describedby="dialog-image" aria-modal="true" aria-hidden="true" tabindex="-1"> 
            <img class="media-photo" aria-modal="true" aria-hidden="true" src='${this._media.image}' alt="${this._media.title}">  
            <h5>${this._media.title}</h5>        
        </section>`
        
        this.$wrapper.innerHTML = imageCard
        return this.$wrapper
    }  
}

class VideoCard {
    constructor(currentMedia, allMedias) {
        this._media = currentMedia
        this._allMedias = allMedias
        this.$wrapper = document.createElement('section')
        this.$wrapper.classList.add('medias-list')
    }

    createMediaPage() {
        const videoCard = `         
        <section class="medias-photographer" role="dialog" aria-labelledby="dialog-video" 
            aria-describedby="dialog-video" aria-modal="true" aria-hidden="true" tabindex="-1"> 
            <video controls class="media-video" aria-modal="true" aria-hidden="true">
                <source src='${this._media.video}' type="video/mp4" alt="${this._media.title}">
            </video>   
            <h5>${this._media.title}</h5>         
        </section>`
        
        this.$wrapper.innerHTML = videoCard
        return this.$wrapper
    }
}

class PriceCard {
    constructor(currentMedia) {
        this._user = currentMedia        
    }
    createPriceCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('banner-price')

        const priceCard = `
        <p class="price" aria-label="Daily rate of the photographer" tabindex="1">
            ${this._user.price}
        </p>`
        $wrapper.innerHTML = priceCard
        return $wrapper
    }
}

export { ImageCard }
export { VideoCard }
export { PriceCard }