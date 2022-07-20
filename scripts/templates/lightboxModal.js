class LightboxModal {
    constructor(currentMedia, allMedias, index) {
        this._media = currentMedia
        this._allMedias = allMedias
        this._index = index
        this.open = false
        this.$wrapper = document.createElement('section')
        this.$wrapper.classList.add('background-lightbox')
        this.$modalWrapper = document.querySelector('.lightbox-modal')
        this.focusableElements = ['.lightbox', '#image-fullsize', '#video-fullsize', 'figcaption', '.left-iframe', '.right-iframe', '.close-iframe']
        this.focusables = []
        this.previousFocusElement = null
    }

    // Créer une fênetre de lightbox 
    createLightbox() {
        let lightboxMedia = `
            <section class="lightbox" role="dialog" aria-label="Image closeup view" aria-labelledby="dialog-lightbox"
                aria-describedby="dialog-iframe" aria-modal="true" aria-hidden="true" tabindex="0">
                <button class="left-iframe" type="button" name="btn-left-iframe" aria-label="Previous image" title="Défiler media vers gauche" data-dismiss="dialog" tabindex="0">
                     <
                </button>
                <section class="lightbox-content">`

        if (this._media.image != undefined) {
            lightboxMedia += `
                    <figure class="lightbox-media-image" aria-modal="true" aria-hidden="true">
                        <img id="image-fullsize" src='${this._media.image}'
                        overflow-y: "auto"
                        overflow-x: "auto"
                        height= "95%"
                        width= "100%"
                        alt= '${this._media.title}'
                        tabindex="0">
                        <figcaption tabindex="0">${this._media.title}</figcaption>
                    </figure>`}
        else {
            lightboxMedia += `
                    <figure class="lightbox-media-video" aria-modal="true" aria-hidden="true">
                        <video controls id="video-fullsize" class="media-video" aria-modal="true" aria-hidden="true">
                            <source src='${this._media.video}'
                            type="video/mp4"
                            overflow-y: "auto"
                            overflow-x: "auto"
                            height= "95%"
                            width= "100%"
                            alt= '${this._media.title}'
                            tabindex="0"></video>
                        <figcaption tabindex="0">${this._media.title}</figcaption>
                    </figure>`}

        lightboxMedia += `
                </section>
                <button class="right-iframe" type="button" name="btn-right-iframe" aria-label="Next image" title="Défiler media vers droit" data-dismiss="dialog" tabindex="0">
                    >
                </button>
                <button class="close-iframe" type="button" name="btn-close-iframe" aria-label="Close dialog" title="Fermer cette fenêtre lightbox" data-dismiss="dialog" tabindex="0">
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
        this.focusables = this.getFocusableElements()
        // console.table(this.focusables)
        this.$modalWrapper.focus()  
        this.onKeydown()   
    }

    // Obtenir la liste des éléments qui ont focus
    getFocusableElements(){
        let arrayFocusables = []
        for(let i = 0; i < this.focusableElements.length; i++){
            if(this.$modalWrapper.querySelector(this.focusableElements[i]) != null){
                arrayFocusables.push(this.$modalWrapper.querySelector(this.focusableElements[i]))
            }
        }
        return arrayFocusables
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
        this.open = false
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
                event.preventDefault()
                break
            case 'ArrowRight' : this.showNextMedia()
                event.preventDefault()
                break
            case 'Tab' : this.focusInLightbox(event)
                break
            }
        }, true)
    }

    // Gerer le tabindex
    focusInLightbox(event) {
        event.preventDefault()
        console.log('before document.activeElement : ' + this.focusElement)
        
        console.log ('focusElement :' + this.focusElement)

        let index =  this.focusables.findIndex( f => f === this.focusElement)
        
        console.log('index :' + index)
        index ++
        if (index >= this.focusables.length) {
            index = 0
        }
        console.log('this.focusables[index] : ' + this.focusables[index])
        this.focusables[index].focus()
        this.focusElement = this.focusables[index]
        this.previousFocusElement = this.focusables[index]
        console.log('after document.activeElement : ' + this.focusElement)
    }

    render() {
        this.createLightbox()
        if(this.previousFocusElement != null){
            this.previousFocusElement.focus()
        }
    }
}

export { LightboxModal }
