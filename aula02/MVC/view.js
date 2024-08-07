class PersonView {
    constructor() {
        this.form = document.getElementById('person-form');
        this.nameInput = document.getElementById('name');
        this.ageInput = document.getElementById('age');
        this.peopleList = document.getElementById('people-list');
    }

    getFormData() {
        return {
            name: this.nameInput.value,
            age: this.ageInput.value
        };
    }

    classForm() {
        this.nameInput.value = "";
        this.ageInput.value = "";
    }

    renderPeople(people) {
        this.peopleList.innerHTML = "";
        people.forEach(person => {
            const li = document.createElement("li");
            li.textContent = '${person.name}, ${person.age} anos';
            this.peopleList.appendChild(li);
        
        });       
    }
}
