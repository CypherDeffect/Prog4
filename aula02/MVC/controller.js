document.addEventListener('DOMContentLoaded', () =>{
    const model = new PersonModel();
    const view = new PersonView();

    const controller = {
        init() {
            view.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addPerson();
            });
            this.render();
        },

        addPerson() {
            const {name, age} = view.getFormData();
            if  (name && age) {
                model.addPerson(name, parseInt(age));
                view.clearForm();
                this.render();
            }
        },

        render() {
            const people = model.getPeople();
            view.renderPeople(people);
        }
    };

    controller.init();
})