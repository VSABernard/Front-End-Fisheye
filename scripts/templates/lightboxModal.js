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
                this.$wrapper.innerHTML = ''
            })
    }

    // Créer un lightbox fênetre
    createLightbox() {
        const lightboxImage = `
            <section class="lightbox" role="dialog" aria-labelledby="dialog-iframe" 
                aria-describedby="dialog-iframe" aria-modal="true" aria-hidden="true" tabindex="2">
                    <section class="lightbox-content">
                        <button class="left-iframe" type="button" name="btn-left-iframe" aria-label="Défiler media vers gauche" title="Défiler media vers gauche" data-dismiss="dialog">
                            <
                        </button>
                        <section class="lightbox-iframe">
                            <iframe class="lightbox-image" 
                                src='${this._media.image}'>
                            </iframe>  
                            <p>${this._media.title}</p>
                        </section>
                    </section>
                    <section class="ligthbox-button">
                        <button class="close-iframe" type="button" name="btn-close-iframe" aria-label="Fermer le lightbox" title="Fermer cette fenêtre lightbox" data-dismiss="dialog">
                            X
                        </button>
                        <button class="right-iframe" type="button" name="btn-right-iframe" aria-label="Défiler media vers droit" title="Défiler media vers droit" data-dismiss="dialog">
                            >
                        </button>
                    </section>
            </section>
        `

        this.$wrapper.innerHTML = lightboxImage

        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)

        this.onCloseButton()
    }

    render() {
        this.createLightbox()
    }
}

export { LightboxModal }