// La mise en place des photos et vidéo du photographe

class ImageCard {
    constructor(media) {
        this._media = media
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
            <img class="media-photo" src='${this._media.image}' alt="${this._media.title}">  
            <h5>${this._media.title}</h5>        
        </section>`
        
        this.$wrapper.innerHTML = imageCard
        return this.$wrapper
    }  
}

class VideoCard {
    constructor(media) {
        this._media = media
        this.$wrapper = document.createElement('section')
        this.$wrapper.classList.add('medias-list')
    }

    createMediaPage() {
        const videoCard = `         
        <section class="medias-photographer" role="dialog" aria-labelledby="dialog-video" 
            aria-describedby="dialog-video" aria-modal="true" aria-hidden="true" tabindex="-1"> 
            <video controls class="media-video">
                <source src='${this._media.video}' type="video/mp4" alt="${this._media.title}">
            </video>   
            <h5>${this._media.title}</h5>         
        </section>`
        
        this.$wrapper.innerHTML = videoCard
        return this.$wrapper
    }
}

class PriceCard {
    constructor(media) {
        this._user = media
    }
    createPriceCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('banner-price')

        const priceCard = `
        <p class="price" aria-label="Daily rate of the photographer">
            ${this._user.price}
        </p>`
        $wrapper.innerHTML = priceCard
        return $wrapper
    }
}

export { ImageCard }
export { VideoCard }
export { PriceCard }