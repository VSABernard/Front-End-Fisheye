class LightboxModal {
    constructor(currentMedia, allMedias, index) {
        this._media = currentMedia
        this._allMedias = allMedias
        this._index = index
        this.$wrapper = document.createElement('section')
        this.$wrapper.classList.add('background-lightbox')
        this.$modalWrapper = document.querySelector('.lightbox-modal')
    }

    // Créer une fênetre de lightbox 
    createLightbox() {
        let lightboxMedia = `
            <section class="lightbox" role="dialog" aria-label="Image closeup view" aria-labelledby="dialog-lightbox"
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
            </section>  `

        this.$wrapper.innerHTML = lightboxMedia
        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)
        this.onCloseLightbox()
        this.onCloseEscape()
        this.onPreviousMedia()
        this.onNextMedia()
        this.onKeydown()
        this.$modalWrapper.focus()
    }

    // Préparer les événements pour FERMER le lightbox
    // Fermeture avec le bouton "X" et la touche "Echap"
    onCloseLightbox() {
        const closeButton = this.$wrapper.querySelector('.close-iframe')
        
        // Fermer le lightbox avec le bouton "X"
        closeButton
            .addEventListener('click', () => {
                this.closeLightbox()
            })
    }
    // Fermer le lightbox avec "Esc"
    onCloseEscape() {
        const lightbox = document.querySelector('.lightbox-modal')
        lightbox.addEventListener('keydown', (event) => {
            if ('Escape' === event.key) {
                this.closeLightbox()
            }
        })     
    }

    closeLightbox = () => {
        this.$modalWrapper.classList.remove('modal-on')
        this.$wrapper.classList.remove('background-lightbox')
        this.$wrapper.innerHTML = ''
    }

    // Faire défiler le contenu du lightbox vers gauche
    onPreviousMedia() {
        const previousButton = this.$wrapper.querySelector('.left-iframe')
        
        previousButton
            .addEventListener('click', () => {          
                this.showPreviousMedia()
            })
    }    

    showPreviousMedia() {
        if(this._index === 0) {
            this._index = this._allMedias.length                    // Le défilement du tableau revient au dernière media
        }
        this._index -- 
        this._media = this._allMedias[this._index]
        // Remise à 0 la fênetre de la lightbox avant d'afficher le media précedent
        this.closeLightbox()
        this.render()
    }

    // Faire défiler le contenu du lightbox vers droit
    onNextMedia() {
        const nextButton = this.$wrapper.querySelector('.right-iframe')

        nextButton
            .addEventListener('click', () => {
                this.showNextMedia()
            })
    }    
    
    showNextMedia() {
        if(this._index === (this._allMedias.length - 1)) {
            this._index = - 1                                       // Le défilement du tableau continue au première media
        }
        this._index ++
        this._media = this._allMedias[this._index]
        // Remise à 0 la fênetre de la lightbox avant d'afficher le media suivant
        this.closeLightbox()
        this.render()  
    }

    // Gérer les événements avec le clavier
    onKeydown() {
        this.$modalWrapper.addEventListener('keydown',event => {
            if(event.defaultPrevented) {
                return
            }

            switch (event.key) {
            case 'ArrowLeft' : this.showPreviousMedia()
                break
            case 'ArrowRight' : this.showNextMedia()
                break
            }
            event.preventDefault()
        }, true)
    }
    render() {
        this.createLightbox()
    }
}

export { LightboxModal }
