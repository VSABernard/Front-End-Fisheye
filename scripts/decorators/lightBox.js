import {LightboxModal} from '../templates/lightboxModal.js' 

function imageCardWithLightbox(imageCard) {
  
    imageCard.$wrapper.addEventListener('click', () => {
        console.log('click lightbox!')
        const lightboxImage = new LightboxModal(imageCard._media)
        lightboxImage.render()
    })        
   
    
    return imageCard
}

export { imageCardWithLightbox }