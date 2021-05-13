class AccessModifierPerson{

    constructor(private _firstName:string, private _lastName:string){
        
    }
    
    public get FirstName() : string {
        return this._firstName;
    }
    
    
    public set FirstName(param : string) {
        this._firstName = param;
    }
    
    public get LastName() : string {
        return this._lastName;
    }
    
    public set LastName(param : string) {
        this._lastName = param;
    }
    
    public getFullName():string{
        return this.FirstName + ' ' + this.LastName;
    }

    static Declaration(){
        console.log('I will bind to the rules');
    }
}

let Joseph = new AccessModifierPerson('Joseph', 'Abhilashh');
console.log(Joseph.getFullName());