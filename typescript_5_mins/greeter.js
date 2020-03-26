var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " +
            lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function greeterStudent(stu) {
    return "Hello, " + stu.fullName;
}
//let user = new Student("Jane", "M.", "User");
var user = new Student("Jane", "", "User");
//let user = {firstName: "Jane", lastName: "User2"};
// let user = [0, 1, 2];
var greeting = (user.middleInitial === "") ?
    greeter(user) : greeterStudent(user);
//document.body.textContent = greeter(user);
document.body.textContent = greeting;
