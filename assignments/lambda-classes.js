// CODE here for your Lambda Classes

// Person
// First we need a Person class. This will be our base-class
// Person receives name age location all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
class Person {
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    };
    //method
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};

//Person Objects
const person1 = new Person({
    name: 'person1',
    age: '21-P1',
    location: 'Here is P1',
});
const person2 = new Person({
    name: 'person2',
    age: '22-P1',
    location: 'Here is P2',
});
    


// Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    };
    //methods
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    };
};

//Instructor Objects 
const instructor1 = new Instructor({
    specialty: 'I Instruct - 1',
    favLanguage: 'Instruct Language 1',
    catchPhrase: 'Instruct Phrase 1'
});
const instructor2 = new Instructor({
    specialty: 'I Instruct - 2',
    favLanguage: 'Instruct Language 2',
    catchPhrase: 'Instruct Phrase 2'
});

// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Instructor {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    };
    //methods
    listsSubjects(array) {
        let holder = [];
        array.forEach(element => {
            holder.push(element);
            return holder;
        });
    };
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge(subject) {
        return `${student.name} has begun a sprint challenge on ${subject}.`
    };
};

//Student Objects
const student1 = new Student({
    previousBackground: 'BackGround - 1',
    className: 'class name-1',
    favSubjects: "faveSubj-1",
});
const student2 = new Student({
    previousBackground: 'BackGround - 2',
    className: 'class name-2',
    favSubjects: 'faveSubj-2',
});



// Project Manager
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManager extends Instructor {
    constructor(pMAttrs) {
        super(pMAttrs);
        this.gradClassName = pMAttrs.gradClassName;
        this.favInstructor = pMAttrs.favInstructor;
    };
    //methods
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`
    };
    debugsCode({student}, subject) {
        return `${student} debugs ${student.name}'s code on ${subject}.`;
    };
};

// Project Manager Objects

const pm1 = new ProjectManager({
    gradClassName: 'gradClass-1',
    favInstructor: 'faveIntsr-1',
});
const pm2 = new ProjectManager({
    gradClassName: 'gradClass-2',
    favInstructor: 'faveIntsr-2',
});