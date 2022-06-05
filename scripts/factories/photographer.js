// function photographerFactory(data) {
//     const { name, id, portrait, city, country, tagline, price } = data

//     function getUserCardDOM() {
//         const $wrapper = document.createElement('article')
//         $wrapper.classList.add('content-wrapper')

//         const userCard = `
//             <article class="photographer" aria-label="List of photographers"> 
//                 <a class='photographer-link' href='./photographer.html?id=${id}'>
//                     <img class='photographer-id' alt="ID photo of the photographer" src='assets/photographers/${portrait}'>
//                     <h2>${name}</h2>
//                 </a>
//                 <div class="photographer-details">
//                     <h3>${city}, ${country}</h3>
//                     <h4>${tagline}</h4>
//                     <h5>${price}€ /jour</h5>
//                 </div>
//             </article>`
        
//         $wrapper.innerHTML = userCard

//         return $wrapper
//     }

    // function getContactCardDOM() {
    //     const $wrapper = document.createElement('article')
    //     $wrapper.classList.add('content-wrapper')

    //     const contactCard = `
    //         <article class="photographer-header" aria-label="Photographers detail"> 
    //             <div class="photographer-details">
    //                 <h2>${name}</h2>
    //                 <h3>${city}, ${country}</h3>
    //             </div>
    //             <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    //             <picture class="photographer-id>
    //                 <img class="photographer-id" alt="ID photo of the photographer" src='assets/photographers/${portrait}'>
    //             </picture>
    //         </article>`
        
    //     $wrapper.innerHTML = contactCard

    //     return $wrapper
    // }


//     return { getUserCardDOM, name, portrait }
// }






// export { photographerFactory }