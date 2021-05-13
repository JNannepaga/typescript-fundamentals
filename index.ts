enum Roles{
    ADMIN = 1,
    USER,
    READONLY
};

type PhysicalStature = 'height' | 'weight'; //Type aliasing literal union types

const person: {
    name: string,
    age: number,
    hobbies: string[],//arrays
    bankDetails: [number, string],//Tuples -> Fixed shape and size of elements, but can't handle PUSH api
    roles: Roles,//enum
    favourites: any,
    priority: PhysicalStature //Type aliasing
} //Object
    = {
        name: 'Joseph',
        age: 50,
        hobbies: ['Cooking'],
        bankDetails: [1,'KotakBank'],
        roles: Roles.READONLY,
        favourites: ["minnj"],
        priority: 'height'
    };

    person.bankDetails = [2, 'admin'];
console.log('Hello World..!'+ person.roles);