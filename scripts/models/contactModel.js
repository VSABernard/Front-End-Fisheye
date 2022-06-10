// class User {
//     constructor(data) {
//         if (User.exist) {
//             return User.instance
//         } else if (data && data.firstName && data.lastName && data.email && data.message) {
//             this._firstName = data.firstName
//             this._lastName = data.lastName
//             this._email = data.email 
//             this._message = data.message 
//             this.saveToLocalStorage()
//             User.instance = this
//             User.instance = true
         
//             return this 
//         }
//     }
//     get firstName() {
//         return this._firstName
//     }
//     get lastName() {
//         return this._lastName
//     }
//     get email() {
//         return this._email
//     }
//     get message() {
//         return this._message
//     } 
 
//     get User() {
//         const firstName = this._firstName || localStorage.getItem('firstName')
//         const lastName = this._lastName || localStorage.getItem('lastName')
//         const email = this._email || localStorage.getItem('email')
//         const message = this._message || localStorage.getItem('message')
//         if (firstName && lastName && email && message) {
//             const user = new User({
//                 firstName,
//                 lastName,
//                 email,
//                 message
//             })
//         }
//         if (!firstName && !lastName && !email && !message) {
//             return null
//         }
//         return {
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             message: message
//         }
//     }
//     saveToLocalStorage() {
//         localStorage.setItem('firstName', this._firstName)
//         localStorage.setItem('lastName', this._lastName)
//         localStorage.setItem('emaile', this._email)
//         localStorage.setItem('message', this._message)
//     }
// }
// export { User }