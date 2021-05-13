function Print<T>(param : T):T
{
    console.log(`you have passed ${JSON.stringify(param)} of type ${typeof param}`);
    return param;
}

//Restricted Generic
function PrintPerson<T extends IPerson>(param : T):T
{
    param.firstName = param.firstName + '//Printed//';
    console.log(`you have passed ${JSON.stringify(param)} of type ${typeof param}`);
    return param;
}