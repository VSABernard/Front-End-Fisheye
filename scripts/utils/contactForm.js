// La mise en place de la modale de contact du photographe

// DOM elements
const body = document.querySelector('#body')
const openModalBtn = document.querySelector('.modal-button')
const main = document.querySelector('#main')
const modal = document.querySelector('.bground')
const form = document.querySelector('form')
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

// Fermer la modale avec "X"
modalCloseBtn.addEventListener('click', onCloseModal)
 
// Fermer la modale avec la touche Esc
modal.addEventListener('keydown', logKey)

function logKey(event) {
    if ('Escape' === event.code) {
        onCloseModal()        
    }
}



// ======================================================================================================
// La VALIDATION des champs de la modale
// La function globale qui montre le SUCCES MESSAGE et l'ERROR MESSAGE 
function showSucces (field) {
    field.parentElement.setAttribute('data-succes-visible', true)   
    field.parentElement.setAttribute('data-error-visible', false)
}
function showError (field) {
    field.parentElement.setAttribute('data-succes-visible', false)    
    field.parentElement.setAttribute('data-error-visible', true)
}

// L'événement "CHANGE" est déclenché lorsqu'un changement de leur valeur est réalisé par l'utilisateur
document.getElementById('first').addEventListener('change', changeOnFirst)
document.getElementById('last').addEventListener('change', changeOnLast)
document.getElementById('email').addEventListener('change', changeOnEmail)
document.getElementById('msg').addEventListener('change', changeOnMsg)

function changeOnFirst (event) {
    let first = event.target
    validateFirstName (first)
}  
function changeOnLast (event){
    let last = event.target
    validateLastName (last)
}
function changeOnEmail (event) {
    let email = event.target
    validateEmail (email)
}
function changeOnMsg (event) {
    let message = event.target
    validateMsg (message)
}

// La function qui montre le message du succes et d'erreur de chaque champs
function validateFirstName (first) {
    if (checkName (first.value) == true) {                                      
        showSucces (first) 
        return true               
    } else {   
        showError (first)  
        return false
    }
}
function validateLastName (last) {
    if (checkName (last.value) == true) {                                       
        showSucces (last)  
        return true          
    } else {   
        showError (last)   
        return false
    }
}
function validateEmail (email) {
    if (checkEmail (email) == true) {                                          
        showSucces (email)       
        return true
    } else {   
        showError (email)  
        return false
    }
}
function validateMsg (message) {
    if (checkMsg (message) == true) {                                          
        showSucces (message)       
        return true
    } else {   
        showError (message) 
        return false
    }
}

// Bloquer le formulaire après la vérification de tous les champs

function validate() {
    const first = document.getElementById('first')
    const last = document.getElementById('last')
    const email = document.getElementById('email')
    const msg = document.getElementById('msg')

    const TOTAL_VALID_FIELD = 3

    let numberValidFields = 0

    if (validateFirstName (first) == true) {
        numberValidFields++
    }
    if (validateLastName (last) == true) {
        numberValidFields++
    }
    if (validateEmail (email) == true) {
        numberValidFields++
    }
    if (validateMsg (msg) == true) {
        numberValidFields++
    }
    return numberValidFields == TOTAL_VALID_FIELD
}

form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()                                  // si l'événement n'est pas géré explicitement, l'action par défaut ne doit pas être exécutée comme elle l'est normalement
    validate()                                          
    
    if (document.querySelectorAll('[data-error-visible=true]').length == 0) {
        
        console.info('DONNEES DE L\'UTILISATEUR : ')                        // console.info pour imprimer les données de l'utilisateur
        console.info('Prénom : ' + this.first.value)                               
        console.info('Nom : ' + this.last.value)
        console.info('Email : ' + this.email.value)
        console.info('Message : ' + this.msg.value)
        
        modal.style.display = 'none'
        form.reset()                                                         // vider chaque champ et le formulaire devient totalement vide.
        onCloseModal()
    }
}

// CONTROLER CHAQUE CHAMPS -------------------------------------------------
// ---------------------------- PRENOM , NOM  ------------------------------

// Controler si le champs du prenom et du nom ont au moins 2 caracters et ne sont pas vides
// name : chequer la value du prenom et du nom
// "return true" si le prenom et le nom sont correct
function checkName (name) {
    if (name == undefined) {
        return
    }  
    let regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    
    if (name.match(regexName) && name != '' && name.length >= 2) {
        return true
    } else {
        return false
    }
}
  
// ---------------------------------------- EMAIL ----------------------------
// Controler si l'email est valide
// "return true" si l'email est valide
function checkEmail (email) {
  
    let regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]{2,}[.][a-zA-Z]{2,3}$/
  
    if (email.value.match(regexEmail))  {
        return true
    } else {
        return false
    }
}

// -------------------------------------- MESSAGE ----------------------------
// Controler si le champs du message n'est pas vide
// msg : chequer la value du message
// "return false" si le message n'est pas correct

function checkMsg () {
    let msgContent = document.getElementById('msg').value

    if(msgContent.length <= 10){
        return false
    }
    return true
}


