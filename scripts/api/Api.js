class Api {
    constructor(url) {
        this._url = url
    }

    /**
     * Renvoyer la liste de tous les photographes
     * @returns liste des photographes
     */
    async getPhotographers() {
        const photographers = await fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
        return photographers
    }

    /**
     * Renvoyer le detail d'un photographe
     * @param identifiant du photographe
     * @returns detail d'un photographe
     */
    async getPhotographer(id) {
        let photographers = await fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))   

        let photographer = photographers.filter(photographer => photographer.id === id)
        return photographer
    }
    
    /**
     * Renvoyer tous les medias des photographes
     * @returns liste des medias
     */
    async getMedias () {        
        const medias = await fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('an error occurs', err))
        return ({media: [...medias]})
    }

    /**
     * Renvoyer la liste des medias d'un photographe
     * @param identifiant du photographe
     * @returns liste des medias du photographe
     */
    async getMediasByPhotographer(idPhotographer) {
        const medias = await fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('an error occurs', err))

        const media = medias.filter(media => media.photographerId === idPhotographer)
        return media
    }
}

export { Api }