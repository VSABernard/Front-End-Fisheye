// La mise en place du header de la page du photographe

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
            <picture class="photographer-id">
                <img alt="ID photo of the photographer" src='${this._user.portrait}'>
            </picture>
        </article>`
        
        $wrapper.innerHTML = headerCard
        return $wrapper
    }
}
    
class PriceCard {
    constructor(user) {
        this._user = user
    }
    createPriceCard() {
        const $wrapper = document.createElement('div')
        $wrapper.classList.add('banner-price')

        const priceCard = `
        <p class="price" aria-label="Daily rate of the photographer">
            ${this._user.price}</p>
        </p>`
        $wrapper.innerHTML = priceCard
        return $wrapper
    }
}

export { ContactCard }
export { PriceCard }