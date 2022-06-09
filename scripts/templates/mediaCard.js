class ImageCard {
    constructor(media) {
        this._media = media
    }

    createMediaPage() {
        const $wrapper = document.createElement('section')
        $wrapper.classList.add('medias-list')

        const imageCard = `         
         <section class="medias_photographer"> 
            <img class="media_photo" src='${this._media.image}'>            
        </section>`
        
        $wrapper.innerHTML = imageCard
        return $wrapper
    }
}

class VideoCard {
    constructor(media) {
        this._media = media
    }

    createMediaPage() {
        const $wrapper = document.createElement('section')
        $wrapper.classList.add('medias-list')

        const videoCard = `         
         <section class="medias_photographer"> 
            <video controls class="media_video">
                <source src='${this._media.video}' type="video/mp4">
            </video>            
        </section>`
        
        $wrapper.innerHTML = videoCard
        return $wrapper
    }
}

export { ImageCard }
export { VideoCard }