// La mise en place de la page principale

class UserCard {
    constructor(user) {
        this._user = user
    }

    createUserCard() {
        const $wrapper = document.createElement('article')
        $wrapper.classList.add('content-wrapper')

        const contactCard = `
        <article class="photographer" aria-label="List of photographers"> 
            <a class='photographer-link' href='./photographer.html?id=${this._user.id}'>
                <img class='photographer-id' alt="ID photo of the photographer '${this._user.name}'" src='${this._user.portrait}'>
                <h2>${this._user.name}</h2>
            </a>
            <div class="photographer-details">
                <h3>${this._user.city}, ${this._user.country}</h3>
                <h4>${this._user.tagline}</h4>
                <h5>${this._user.price}€ /jour</h5>
            </div>
        </article>`
        
        $wrapper.innerHTML = contactCard
        return $wrapper
    }
}

export { UserCard }
