    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]


        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        console.log ('photographers :' + photographers)
        console.table (photographers)

        const photographersSection = document.querySelector(".photographer_section");
        console.log ('photographersSection :' + photographersSection)

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            console.log ('photographerModel :' + photographerModel)

            const userCardDOM = photographerModel.getUserCardDOM();
            console.log ('userCardDOM :' + userCardDOM)
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        console.log ('{ photographers } : '+ { photographers })
        displayData(photographers);
    };
    
    init();
    