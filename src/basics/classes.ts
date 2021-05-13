class Person implements IPerson{

    constructor(fN:string, lN:string){
        this.firstName = fN;
        this.lastName = lN;
    }

    public firstName: string;

    public lastName: string;

    public getFullName():string{
        return this.firstName + ' ' + this.lastName;
    }

    static Declaration(){
        console.log('I will bind to the rules');
    }
}

class Programmer extends Person{
    constructor(){
        super('FirstName', 'LastName');
    }

    public getSkillSet():string{
        return `${super.getFullName()} has Java skillset`;
    }
}

Person.Declaration();
let Joe: IPerson = new Person('Joseph', 'Abhilash');
Joe.getFullName();

let skills = new Programmer();
skills.getSkillSet();