//USE CASES OF Callbacks

const word = "h e l l o";

word.split(" ").map(ele=>{    
    console.log(ele)
})

function sayHi(greet, callback){
    const name = callback();
    console.log(`${name} says ${greet}`);
}

sayHi('Hi!', () => {
    const name = "Bibhuti";
    return name;
})
 

//35. THE CALLBACK FUNCTION

setTimeout(() => {
    console.log('Two secs are up')
},2000)

const names = ["Andrew","Jen","Jess"];
const shortNames = names.filter((name) => {
    return name.length <= 4;
})

const geocode = (address,callback) => {
   
    setTimeout( () => {
        const data = {
            longitude : 0,
            latitude : 0,
        }
        callback(data);
    },2000)
}

geocode('Kathmandu',(data) => {
    console.log(data);
});


//Goal: Mess around with the callback pattern

//1. Define an add func that accepts correct arguments
//2. use setTimeOut to stimulate a 2 sec delay
//3. after 2 sec,call the callback function with the sum
//4. test your work!


const add = (a,b,callback) => {
    setTimeout( () => {
        callback(a+b);
    },2000);
}

add(1,4,(sum) => {
    console.log(sum); // should print 5
})

