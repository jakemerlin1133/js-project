class Students{

    constructor(firstname, lastname, middlename, school, block){
        this.firstname = firstname;
        this.lastname = lastname;
        this.middlename = middlename;
        this.school = school;
        this.block = block;
    }

    static addStudent(student){
       const studentsList = document.querySelector('#student-list');
       const row = document.createElement('tr');

        row.innerHTML =`
        <td>${student.firstname}</td>
        <td>${student.lastname}</td>
        <td>${student.middlename}</td>
        <td>${student.school}</td>
        <td>${student.block}</td>
        <td><a href="#" class="btn btn-danger btn-sm remove">Remove</a></td>
        `;

        studentsList.appendChild(row);
    }

    static ShowAlert(message, className){
       const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout((e) => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields(){
        const firstname = document.querySelector('#firstname').value = "";
        const lastname = document.querySelector('#lastname').value = "";
        const middlename = document.querySelector('#middlename').value = "";
        const school = document.querySelector('#School').value = "";
        const block = document.querySelector('#Block').value = "";
    }

    static removeStudent(e){
        if(e.classList.contains('remove')){
            e.parentElement.parentElement.remove();
        }
    }
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = document.querySelector('#firstname').value;
    const lastname = document.querySelector('#lastname').value;
    const middlename = document.querySelector('#middlename').value;
    const school = document.querySelector('#School').value;
    const block = document.querySelector('#Block').value;

    if(firstname === "" || lastname === "" || middlename === "" || school === "" || block ===""){
        Students.ShowAlert("Plese Fill the Blank", "danger");
    }else{
        Students.ShowAlert("Student Added", "success");
        const student = new Students(firstname, lastname, middlename,school, block);
        Students.addStudent(student);
        Students.clearFields();
    }
});

document.querySelector('#student-list').addEventListener('click',(e) => {
    Students.removeStudent(e.target);
});

























