
const calc = require('./calc');

const prompt = require('prompt-sync')();
const ans = prompt("Choose a calculation: \n 1.Add \n 2.Sub \n 3. Mul \n 4.Div \n")

const a = 4;
const b = 2;

// console.log('ans', typeof ans);

let res;

switch(parseInt(ans)) {
    case 1: 
        res = calc.add(a,b);
        break;
        
    case 2: 
        res = calc.sub(a,b);
        break;
    
    case 3: 
        res = calc.mul(a,b);
        break;
    
    case 4: 
        res = calc.div(a,b);
        break;
    
    default: 
    console.log("wrong choice!")
}

 console.log("Calculation: "+ res)




// CLEAN UP:

// let choice = prompt("Choose a calculation: \n 1.Add \t 2.Sub \t 3. Mul \t 4.Div \t");

// var readline = require('readline');

// readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("Choose a calculation: \n 1.Add \t 2.Sub \t 3. Mul \t 4.Div \t", ans => {
//     console.log(ans);
// })


