// CODE here for your Lambda Classes

class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, and I am from ${this.location}`
    }
}

const Kelsey = new Person({
    name:'Kelsey',
    age:23,
    location:'Hawaii',
})

const John = new Person({
    name:'John',
    age:33,
    location:'France',
})



console.log(Kelsey.speak())



class Instructor extends Person{
    constructor(attrs){
    super(attrs)
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
        this.subject = attrs.subject;
    }
    demo(){
        return ` Today, we are learning about ${this.subject}`
    }
    grade(){
        return `${this.name} receives a perfect score on ${this.subject}`
    }
    graded(grade){
       return `${this.grade}` + (Math.floor(Math.random() * 100))
     }
}



const Meghan = new Instructor({
    name:'Meghan',
    age:23,
    location:'New-York',
    specialty:'Redux',
    favLanguage:'Italian',
    catchPhrase:` Don't forget the homies`,
    subject:'Algorithms'
})

const Ryan = new Instructor({
    name:'Ryan',
    age:33,
    location:'France',
    specialty:'Redux',
    catchPhrase:' Don\'/t forget the homies',
    subject:'History'
})


console.log(Meghan.demo())
console.log(Ryan.grade())


// favSubjects=['HTML', 'CSS', 'JavaScript']

class Student extends Instructor{
    constructor(attr){
        super(attr)
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        
    }
    listsSubjects(){
         return this.favSubjects.toString().split(',').join('\r\n');
    }
 
    PRAssingment(subject){
        return `${this.name} has submitted a PR for ${this.subject}`
    
}
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${this.subject}`
    }
    graduate(){
        if(this.grade === 70){
            return`${this.name} can graduate`
            }else{
                return`${this.name} has to study more`
            }
        }

    // (this.grade>= 70) ? `${this.name} can graduate` : `${this.name} has to study more`
        
 }




const Riley = new Student({
    name:'Riley',
    age:41,
    subject:'Design',
    location:'Mississippi',
    className:'History101',
    previousBackground:'Student',
    favSubjects:['Computer Science','Math','JavaScript'],
    grade:70,
})
const Mike = new Student({
    name:'Mike',
    subject:'Art',
    className:'English',
    previousBackground:'Student',
    favSubjects:['History','Spanish','Public Speaking'],
    grade:90,
})

console.log(Mike.graduate())
console.log(Riley.listsSubjects())
console.log(Riley.PRAssingment())
console.log(Mike.sprintChallenge())




class ProjectManage extends Instructor{
    constructor(attr){
     super(attr)
     this.gradClassName = attr.gradClassName;
     this.favInstructor = attr.favInstructor;
     this.channel = attr.channel;
    }
    standUp(channel){
        return `${this.name} announces to ${this.channel} @channel standy times!`
    }
    debugsCode(student, subject){
         return `${this.name} debugs ${this.name}'s code on ${this.subject}`
    }
}


const fred = new ProjectManage({
    name: 'Fred',
    location: 'Portland',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName:'CS1',
    favInstructor:'Sean',
    channel:'Lambda',
    subject:'Math'
  });
const Carrie = new ProjectManage({
    name: 'Carrie',
    location: 'Portland',
    age: 34,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName:'CS5',
    favInstructor:'Sean',
    channel:'Lambda',
    subject:'Math'
  });

  console.log(fred.standUp())
  console.log(Carrie.debugsCode())