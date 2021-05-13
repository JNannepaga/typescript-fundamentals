function combine(
    n1: number | string /*union types*/, 
    n2: number | string /*union types*/)
{
    let result;
    
    if(typeof(n1) === 'number' && typeof n2 === 'number')
    {
        result = n1 + n2
    }
    else{
        result = n1.toString() + n2.toString();
    }
    
    return result;
}