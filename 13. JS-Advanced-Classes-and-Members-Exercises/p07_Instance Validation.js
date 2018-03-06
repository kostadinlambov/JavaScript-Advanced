class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(newClientId) {
        let clientIdRegex = /^(\d{6})$/;
        if (clientIdRegex.test(newClientId)) {
            this._clientId = newClientId;
        } else {
            throw new TypeError('Client ID must be a 6-digit number')
        }
    }

    get email() {
        return this._email;
    }

    set email(newEmail) {
        let emailRegex = /^([a-zA-Z0-9]+@[a-zA-Z.]+)$/;
        if (emailRegex.test(newEmail)) {
            this._email = newEmail
        } else {
            throw new TypeError('Invalid e-mail')
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(newFirstName) {
        let firstNameRegex = /^([a-zA-Z]{3,20})$/;
        if (firstNameRegex.test(newFirstName)) {
            this._firstName = newFirstName
        } else {
            if (newFirstName.length < 3 || newFirstName.length > 20) {
                throw new TypeError('First name must be between 3 and 20 characters long')
            } else {
                throw new TypeError('First name must contain only Latin characters')
            }

        }
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newLastName) {
        let lastNameRegex = /^([a-zA-Z]{3,20})$/
        if (lastNameRegex.test(newLastName)) {
            this._lastName = newLastName
        } else {
            if (newLastName.length < 3 || newLastName.length > 20) {
                throw new TypeError('Last name must be between 3 and 20 characters long')
            } else {
                throw new TypeError('Last name must contain only Latin characters')
            }

        }
    }
}

// Sample Input
let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
// Output
// TypeError: Client ID must be a 6-digit number

// Sample Input
// let acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// Output
// TypeError: Invalid e-mail

// Sample Input
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
// Output
// TypeError: First name must be between 3 and 20 characters long

// Sample Input
// let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
// Output
// TypeError: "First name must contain only Latin characters

