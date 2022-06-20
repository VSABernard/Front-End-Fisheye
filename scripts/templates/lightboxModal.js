// SOLUTION AVEC DECORATOR PATTERN
class LightboxModal {
    constructor(media) {
        this._media = media  
        this.$wrapper = document.createElement('section')
        this.$wrapper.classList.add('background-lightbox')
        this.$modalWrapper = document.querySelector('.lightbox-modal')
    }   
      
    // Ajouter un événement onClick sur un bouton qui va fermer la modale
    onCloseButton() {
        this.$wrapper
            .querySelector('.close-iframe')
            .addEventListener('click', () => {
                this.$modalWrapper.classList.remove('modal-on')
                this.$wrapper.classList.remove('background-lightbox')
                this.$wrapper.innerHTML = ''
            })
        
    }
    
    // Créer un lightbox fênetre
    createLightbox() {

        console.log('createLightBox media: ' + JSON.stringify(this._media))
        let lightboxMedia = `
            <section class="lightbox" role="dialog" aria-labelledby="dialog-lightbox" 
                aria-describedby="dialog-iframe" aria-modal="true" aria-hidden="true" tabindex="2">
                <button class="left-iframe" type="button" name="btn-left-iframe" aria-label="Défiler media vers gauche" title="Défiler media vers gauche" data-dismiss="dialog">
                     <
                </button>
                <section class="lightbox-content">`

        if (this._media.image != undefined) {
            lightboxMedia += `
                    <figure class="lightbox-media-image" aria-modal="true" aria-hidden="true"> 
                        <img src='${this._media.image}'
                        overflow-y: "auto"
                        overflow-x: "auto"
                        height= "95%"
                        width= "100%"
                        alt= '${this._media.title}'>
                        <figcaption>${this._media.title}</figcaption>
                    </figure>`}
        else {
            lightboxMedia += `           
                    <figure class="lightbox-media-video" aria-modal="true" aria-hidden="true"> 
                        <video controls class="media-video" aria-modal="true" aria-hidden="true">
                            <source src='${this._media.video}' 
                            type="video/mp4"
                            overflow-y: "auto"
                            overflow-x: "auto"
                            height= "95%"
                            width= "100%"
                            alt= '${this._media.title}'></video>
                        <figcaption>${this._media.title}</figcaption>
                    </figure>`}

        lightboxMedia += `
                </section>
                <button class="right-iframe" type="button" name="btn-right-iframe" aria-label="Défiler media vers droit" title="Défiler media vers droit" data-dismiss="dialog">
                    >
                </button>
                <button class="close-iframe" type="button" name="btn-close-iframe" aria-label="Fermer le lightbox" title="Fermer cette fenêtre lightbox" data-dismiss="dialog">
                    X
                </button>
            </section>
        `

        this.$wrapper.innerHTML = lightboxMedia
        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)
        this.onCloseButton()
    }
    
    


    render() {
        this.createLightbox()
    }

}

export { LightboxModal }
