// // // DOM elements
// const body = document.querySelector('#body')
// // const openLightbox = document.querySelector('img.media-photo')
// const main = document.querySelector('#main')
// const lightbox = document.querySelector('.lightbox-modal')
// const modalCloseLightbox = document.querySelector('.close-iframe')

// // //Functions
// // const onOpenLightbox = () => {
// //     main.setAttribute('aria-hidden', 'true')
// //     lightbox.setAttribute('aria-hidden', 'false')
// //     body.classList.add('no-scroll')
// //     lightbox.style.display = 'block'
// //     modalCloseLightbox.focus()
// // }
// const onCloseLightbox = () => {
//     main.setAttribute('aria-hidden','false')
//     lightbox.setAttribute('aria-hidden', 'true')
//     body.classList.remove('no-scroll')
//     lightbox.style.display = 'none'
//     modalCloseLightbox.focus()
// }



// // // Ouvrir la modale avec le bouton "Contactez-moi"
// // openLightbox.addEventListener('click', onOpenLightbox)

// // // Fermer la modale avec "X"
// // modalCloseLightbox.addEventListener('click', onCloseLightbox)

// lightbox.addEventListener('keydown', logKey)

// function logKey(event) {
//     if ('Escape' === event.code) {
//         onCloseLightbox()        
//     }
// }