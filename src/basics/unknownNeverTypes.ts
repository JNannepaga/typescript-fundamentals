let userInput1: unknown;
let userInput2: any;
let userName: string;

//userName = userInput1; // You cannot directly assign unknown values to the defined(string) onz.
userName = userInput2;

if(typeof userInput1 === 'string'){//We need to have an extra logic to ensure type checking instead of sending any 
    userName = userInput1;
}

function generateException(message: string):never{//we ensure that this function would never return a value
    console.log('hello error console');
    throw message;
}