function add1(n1: number, n2: number): void
{
    console.log(n1 + n2);
}

function add2(n1: number, n2: number, n3 : number): undefined
{
    const undef = undefined;
    console.log(n1 + n2+ n3);
    return undef; //or use --> return;
}

function add3(n1: number, n2: number, n3 : number): number
{
    const sum = n1 + n2+ n3;
    return sum;
}


let addition : Function;//Non Generic type;

addition = add1;
addition = add3;// can accept any input.

let addition_Gen : (a: number, b:number, c: number) => number; //Generic type;
addition_Gen = add3;


//Functions as argument\
function addAndHandle(n1: number, n2: number, handler: (result: number)=>void){
    const result = n1 + n2;
    handler(result);
}

addAndHandle(1, 2, (result)=>{
    result = result + 10;
    console.log(result);
});