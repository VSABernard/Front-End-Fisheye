// La mise en place du header de la page du photographe

class ContactCard {
    constructor(user) {
        this._user = user
    }

    createContactPage() {
        const $wrapper = document.createElement('section')
        $wrapper.classList.add('content-wrapper')

        const headerCard = `
        <section class="photograph-details" aria-label="Details of photographer"> 
            <section class="info">
                <h2>${this._user.name}</h2>  
                <article>                        
                    <h3>${this._user.city}, ${this._user.country}</h3>
                    <h4>${this._user.tagline}</h4>
                </article>
            </section>
            <picture class="photographer-id">
                <img alt="ID photo of the photographer'${this._user.name}'" src='${this._user.portrait}'>
            </picture>
        </section>`
        
        $wrapper.innerHTML = headerCard
        return $wrapper
    }
}
    
export { ContactCard }