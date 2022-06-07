class ContactCard {
    constructor(user) {
        this._user = user
    }

    createContactPage() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('content-wrapper')

        const headerCard = `
        <article class="photograph-details" aria-label="Details of photographer"> 
            <div class="info">
                <h2>${this._user.name}</h2>                          
                <h3>${this._user.city}, ${this._user.country}</h3>
                <h4>${this._user.tagline}</h4>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <picture class="photographer-id">
                <img alt="ID photo of the photographer" src='${this._user.portrait}'>
            </picture>
        </article>`
        
        $wrapper.innerHTML = headerCard
        return $wrapper
    }
}

export { ContactCard }