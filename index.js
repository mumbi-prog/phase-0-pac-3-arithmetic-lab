//basic math functions
function add(a, b){
    return a+b
}

function subtract(a, b){
    return a-b
}

function multiply(a, b){
    return a*b
}

function divide(a, b){
    return a/b
}

function increment(a){
    return a+1
}

function decrement(a){
    return a-1
}

//makeInt(n)
function makeInt(n){
   const parsedInteger = parseInt(n, 10);
   if (isNaN(parsedInteger)){
    return NaN;
   }
   else return parsedInteger;
}

//preserveDecimal(n)
function preserveDecimal(n){
    const parsedFloat = parseFloat(n);
    if (isNaN(parsedFloat)){
        return NaN;
       }
       else return parsedFloat;
}
