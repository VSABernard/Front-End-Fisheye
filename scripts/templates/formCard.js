// import { User } from '../models/contactModel.js'

// class Form {
//     constructor() {
//         this.$wrapper = document.createElement('form')
//         this.$modalWrapper = document.querySelector('.contact-form')
//     }
//     onSubmitForm() {
//         this.$wrapper
//             .querySelector('form')
//             .addEventListener('submit', evenement => {
//                 evenement.preventDefault()
//                 const firstNameInputValue = this
//                     .$wrapper
//                     .querySelector('#firstName')
          
//                 const lastNameInputValue = this
//                     .$wrapper
//                     .querySelector('#lastName')
//                 const emailInputValue = this
//                     .$wrapper
//                     .querySelector('#email')
//                 const messageInputValue = this
//                     .$wrapper
//                     .querySelector('#message')
//                 const user = new User ( {
//                     firstName: firstNameInputValue,
//                     lastName: lastNameInputValue,
//                     email: emailInputValue,
//                     message: messageInputValue
//                 })
//                 if (user.user) {
//                     this.$modalWrapper.classList.remove('modal-on')
//                     this.$modalWrapper.innerHTML =''
//                 }
//             })
//     }
//     shouldDisplayForm() {
//         const user = new User()
//         return !user.user
//     }
//     createForm() {
//         const form = `
//          <form name="reserve" id="form" method="get" action="photographer.html">
//              <div class="formData" data-error-visible="false" data-succes-visible="false" data-error="Veuillez entrer au moins 2 caracters pour ce champ">
//                  <label for="first">Prénom</label><br>
//                  <input class="text-control" type="text" id="first" name="first"/><br>                  
//              </div>
//              <div class="formData" data-error-visible="false" data-succes-visible="false" data-error="Veuillez entrer au moins 2 caracters pour ce champ">
//                  <label for="last">Nom</label><br>
//                  <input class="text-control" type="text" id="last" name="last"/><br>
//              </div>
//              <div class="formData" data-error-visible="false" data-succes-visible="false" data-error="Adresse mail invalide">
//                  <label for="email">E-mail</label><br>
//                  <input class="text-control" type="email" id="email" name="email"/><br>
//              </div>
//              <div class="formData">
//                  <label for="msg">Votre message</label>
//                  <textarea class="text-control" aria-label="Détail de votre message" type="text" name="message" id="message" cols="30" rows="5"></textarea>
//              </div>
//              <input class="btn-submit button" type="submit" value="Envoyer"/>
//          </form>`
//         this.$wrapper.innerHTML = form
//         this.$modalWrapper.classList.add('modal-on')
//         this.$modalWrapper.appendChild(this.$wrapper)
//     }
//     render() {
//         if (this.shouldDisplayForm()) {
//             this.createForm()
//             this.onSubmitForm()
//         }
//     }
// }
// export { Form }