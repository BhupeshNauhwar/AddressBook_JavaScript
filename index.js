class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
    }
    validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    validateAddress(value) {
        return value.length >= 4;
    }

    validateZip(zip) {
        return /^\d{6}$/.test(zip);
    }

    validatePhone(phone) {
        return /^[6-9]\d{9}$/.test(phone);
    }

    validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
}
