// DOM elements
const body = document.querySelector('#body')
const openModalBtn = document.querySelector('.modal-button')
const main = document.querySelector('#main')
const modal = document.querySelector('.bground')
const modalCloseBtn = document.querySelector('.close-form')
 
// Functions
const onOpenModal = () => {
    main.setAttribute('aria-hidden', 'true')
    modal.setAttribute('aria-hidden', 'false')
    body.classList.add('no-scroll')
    modal.style.display = 'flex'
    modalCloseBtn.focus()
}
 
const onCloseModal = () => {
    main.setAttribute('aria-hidden','false')
    modal.setAttribute('aria-hidden', 'true')
    body.classList.remove('no-scroll')
    modal.style.display = 'none'
    openModalBtn.focus()
}
 
// Ouvrir la modale avec le bouton "Contactez-moi"
openModalBtn.addEventListener('click', onOpenModal)

// Fermer la modale
modalCloseBtn.addEventListener('click', onCloseModal)
 
// Fermer la modale avec la touche Esc
modal.addEventListener('keydown', logKey)

function logKey(event) {
    console.log(`keypress : ${event.code}`)
    
    if ('Escape' === event.code) {
        onCloseModal()        
    }
}

