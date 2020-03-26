class Student {
  fullName: string;
  constructor(public firstName: string,
    public middleInitial: string, public lastName: string){
      this.fullName = firstName + " " + middleInitial + " " +
      lastName;
    }
}


interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person){
  return "Hello, " + person.firstName + " " + person.lastName;
}

function greeterStudent(stu: Student){
  return "Hello, " + stu.fullName;
}

//let user = new Student("Jane", "M.", "User");
let user = new Student("Jane", "", "User");
//let user = {firstName: "Jane", lastName: "User2"};
// let user = [0, 1, 2];
let greeting = (user.middleInitial === "") ?
  greeter(user) : greeterStudent(user) ;
//document.body.textContent = greeter(user);
document.body.textContent = greeting;
