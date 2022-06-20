import {LightboxModal} from '../templates/lightboxModal.js' 

function mediaCardWithLightbox(lightboxCard) {
    lightboxCard.$wrapper.addEventListener('click', () => {
        console.log('click lightbox!')
        const lightboxMedia = new LightboxModal(lightboxCard._media)
        lightboxMedia.render()
    })        

    return lightboxCard
}

export { mediaCardWithLightbox }