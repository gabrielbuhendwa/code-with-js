//this block of code here defines a function called getName, which basically prompts the user to enter their name and returns it
function getName(){
    return prompt('your name is', '');
}

//this function here contains a call to getName(), which is also defined in this file
function greet(){
    let userName = getName();
    console.log('hello ' + userName);
}
greet();