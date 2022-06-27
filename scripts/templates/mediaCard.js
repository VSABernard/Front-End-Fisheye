// La mise en place des photos et vidéo du photographe

class MediasCard {
    constructor(currentMedia) {
        this._media = currentMedia 
        this.$filter = document.createElement('form')
        this.$wrapper = document.createElement('section')
        this.$wrapper.classList.add('medias-list')
    }

    get media() {
        return this._media
    }
    
    createMediaPage() {
        let mediaCard = `         
         <section class="medias-photographer" role="dialog" aria-labelledby="dialog-image" 
            aria-describedby="dialog-image" aria-modal="true" aria-hidden="true"> 
            `
        if (this._media.image != undefined) {
            mediaCard += `
                    <img class="media-photo" id="${this._media.id}"  aria-modal="true" aria-hidden="true" src='${this._media.image}' alt="${this._media.title}" tabindex="9">  
                    <article class="media-details">
                        <h5 tabindex="10" >${this._media.title}</h5>    
                        <input class="number-likes" aria-label="Number of likes">
                            <span class="like-counter" id="like-${this._media.id}" type="text" value="${this._media.likes}" tabindex="11">${this._media.likes}</span>
                            <button class="button-heart" id="heart-${this._media.id}" type="button" aria-haspopup="dialog" aria-controls="dialog" on>
                                <i class="fa-solid fa-heart" id="button-likes" aria-label="Button like"></i>
                            </button>
                        </input>
                    </article> `  }
        else {
            mediaCard += `
                    <video class="media-video" id="${this._media.id}" aria-modal="true" aria-hidden="true">
                        <source src='${this._media.video}' type="video/mp4" alt="${this._media.title}" tabindex="9">
                    </video>   
                    <article class="media-details">
                        <h5 tabindex="10">${this._media.title}</h5>   
                        <input class="number-likes" aria-label="Number of likes">
                            <span class="like-counter" id="like-${this._media.id}" type="text" value="${this._media.likes}" tabindex="11">${this._media.likes}</span>
                            <button class="button-heart" id="heart-${this._media.id}" type="button" aria-haspopup="dialog" aria-controls="dialog" on>
                                <i class="fa-solid fa-heart" id="button-likes" aria-label="Button like"></i>
                            </button>
                        </input>
                    </article> ` }
        mediaCard += `
                </section> `
        
        this.$wrapper.innerHTML = mediaCard
        return this.$wrapper
    }  
}

class FilterCard {
    constructor() {
        this.$filter = document.createElement('form')
    }

    createFilterCard() {
        
        this.$filter.classList.add('filter-block')
        this.$filter.setAttribute('aria-labelledby', 'media-container')
        this.$filter.setAttribute('aria-haspopup', 'listbox')
        this.$filter.setAttribute('role', 'listbox')
        this.$filter.setAttribute('aria-hidden', 'false')
        this.$filter.setAttribute('aria-expanded', 'true')

        const filterBlock = `
            <form class="filter-form" id="filter-block" action="#" method="POST">
                <label for="filter-select" class="filter-label" tabindex="7">Trier par </label>
                <select id="form-select" name="choice" id="tri" tabindex="8">         
                    <option class="form-options" id="option-0" value="">-- Filtres --</option>
                    <option class="form-options" id="selected" value="popularity">Popularité</option>          
                    <option class="form-options" id="option-2" value="date">Date</option>          
                    <option class="form-options" id="option-3" value="title">Titre</option>          
                </select>
            </form>
            `

        this.$filter.innerHTML = filterBlock
        return this.$filter
    }
}

class FooterCard {
    constructor(currentMedia) {
        this._user = currentMedia  
        this._media = currentMedia       
    }
    createFooterCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('banner-footer')

        const footer = `
        <footer class="footer" aria-label="Banner of likes and daily rate" tabindex="6">
            <section class="likes" aria-label="Total number of likes">
                <span id="total-likes" aria-label="Number of ${this._media.likes} likes">${this._media.likes}</span>
                <i class="fa-solid fa-heart" id="footer-likes" aria-label="Button like"></i>
            </section>
            <p class="price" aria-label="Daily rate of the photographer">${this._user.price}</p>
        </footer>`
        $wrapper.innerHTML = footer
        return $wrapper
    }
}

export { MediasCard }
export { FilterCard }
export { FooterCard }