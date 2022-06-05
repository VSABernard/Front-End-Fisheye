class Api {
    constructor(url) {
        this._url = url
    }

    /**
     * Renvoyer la liste de tous les photographes
     * @returns liste des ^hotographes
     */
    async getPhotographers() {
        const photographers = await fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
        console.log ('photographers :' + photographers)
        console.table (photographers)
        return ({photographers: [...photographers]})
    }
}

export { Api }