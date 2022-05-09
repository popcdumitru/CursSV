//Exercitiul 1

/*
x = (valoare) =>{
    if (valoare % 2 == 0){
        console.log(valoare-2);
    }else{
        console.log(valoare*2);
    }
}

x(3);

*/

//Exercitiul 2
/*
const arr = [1,2,3,4,5,6,7,8,9];

savePrimes = (arr) =>{
    //nested function to test if a number is prime
    testPrime = (n) =>{
        if (n===1)
        {
        return false;
        }else
        if(n === 2)
        {
         return true;
        }else
        {
            for(var x = 2; x < n; x++)
          {
             if(n % x === 0)
              {
             return false;
             }
          }
         return true;  
        }
    }
    //array to be logged at the end
    var primes = [];

    //looping throughout the given array
    for (let index = 0; index < arr.length; index++){
        if(testPrime(arr[index])){
            primes.push(arr[index]);
        }
    }
   
    console.log(primes);
}
savePrimes(arr);
*/

//Exercitiul 3
/*
test1 = ['1','2','3','4']
const output = [];
test1.forEach(function (arr){
   if (typeof arr ==='string')
    output.push(arr);     
})
console.log(output);
*/

//Exercitiul 5
/*
const id = 'Dumitru';
switch (id){
    case 'Alin':
        console.log('Try agagin');
        break;
    case 'Dumitru':
        console.log('You are right');
    case 'Gusti':
        console.log('Not even close');
        break;
    case 'Dumitru':
        console.log('thats it!');
    case 'Catalin':
        console.log('nope');
        break;
    default:
        console.log('hurraaay');
} 
*/