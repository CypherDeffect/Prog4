class PersonModel {
    constructor() {
        this.people = [];
    }

    addPerson(name, age) {
        const person = {name, age};
        this.people.push(person)
    }

    getPeople() {
        return this.people;
    }
}