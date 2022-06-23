import {LightboxModal} from '../templates/lightboxModal.js' 

function mediaCardWithLightbox(lightboxCard, allMedias, index) {         
    lightboxCard.$wrapper.addEventListener('click', () => {   
        console.log('click to open the lightbox!')
        const lightboxMedia = new LightboxModal(lightboxCard._media, allMedias, index)
        lightboxMedia.render()
    })        

    return lightboxCard
}

export { mediaCardWithLightbox }