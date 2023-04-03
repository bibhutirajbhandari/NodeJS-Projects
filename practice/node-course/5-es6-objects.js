//Object Destructing

const person = {
    name: "bibhuti",
    age: "22",
 }

 //push properties of product to empty object and rename by own object names
 
 //instead of product.property_name
 let {name:username, age:userage} = person; 
 console.log(person);  //{ name: 'bibhuti', age: '22' }


 //Destructing object as argument
const bibhuti = (type, {name,age}) => {
    console.log(type,name,age);
}
    
bibhuti('intern',person); //intern bibhuti 22