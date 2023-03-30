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







