// La mise en place des photos et vidéo du photographe

class ImageCard {
    constructor(media) {
        this._media = media
    }

    createMediaPage() {
        const $wrapper = document.createElement('section')
        $wrapper.classList.add('medias-list')

        const imageCard = `         
         <section class="medias-photographer"> 
            <img class="media-photo" src='${this._media.image}'>  
            <h5>${this._media.title}</h5>        
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
        <section class="medias-photographer"> 
            <video controls class="media-video">
                <source src='${this._media.video}' type="video/mp4">
            </video>   
            <h5>${this._media.title}</h5>         
        </section>`
        
        $wrapper.innerHTML = videoCard
        return $wrapper
    }
}


export { ImageCard }
export { VideoCard }