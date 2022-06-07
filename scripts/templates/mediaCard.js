class MediaCard {
    constructor(media) {
        this._media = media
    }

    createMediaPage() {
        const $wrapper = document.createElement('section')
        $wrapper.classList.add('medias-list')

        const mediasCard = `         
         <section class="medias_photographer"> 
            <img class="media_photo" src='${this._media.image}'>
            
        </section>`
        
        $wrapper.innerHTML = mediasCard
        return $wrapper
    }
}

export { MediaCard }