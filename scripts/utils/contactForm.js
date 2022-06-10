
// const main = document.getElementById('main')
// const modalbg = document.querySelectorAll('.bground')
// const modalBtn = document.querySelectorAll('.modal-button')
// const modal = document.getElementById('modal')
// const firstName = document.querySelector('#first')

// // Afficher la modale de contact
// modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// // launch modal form
// function launchModal() {
//     main.setAttribute('aria-hidden', true)
//     modal.setAttribute('aria-hidden', false)
//     modal.style.display = 'block'
//     modalbg.style.display = 'block'
//     firstName.focus()
// }








//SOLUTION 2

document.addEventListener('DOMContentLoaded',() => { 
    const triggers = document.querySelectorAll('[aria-haspopup="dialog"]')
    const doc = document.getElementById('main')
    const open = function (dialog) {
        dialog.setAttribute('aria-hidden', false)
        dialog.style.display = 'block'
        doc.setAttribute('aria-hidden', true)
        doc.style.display = 'none'
    }

    triggers.forEach((trigger) => {
        const dialog = document.getElementById('contact-modal')
    
        trigger.addEventListener('click', (event) => {
            event.preventDefault()

            open(dialog)
        })
    })
})











// function displayModal() {
//     modal.style.display = 'flex'
//     document.querySelector('.close-form').focus()
// }

// function closeModal() {
//     const modal = document.getElementById('contact-modal')
//     modal.style.display = 'none'
// }
