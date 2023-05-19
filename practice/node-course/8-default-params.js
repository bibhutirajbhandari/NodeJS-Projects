//Default Function Params

const greeter = (name = "bibhuti", age) => {
  console.log("hello " + name);
};
greeter();
//here name = 'bibhuti' assigns value directly onto greeter parameter
// helps with error when no value is assigned at function call

//similarly,

const transaction = (trans_type, { label, stock } = {}) => {
  console.log(trans_type, label, stock);
};
transaction("order"); //parameter trans_type i.e order is just sent

//here, {} empty objects is displayed as default if value provided at function call fails or is empty
