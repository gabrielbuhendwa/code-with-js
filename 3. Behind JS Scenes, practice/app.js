function getName(){
    return prompt('your name is', '');
}

function greet(){
    let userName = getName();
    console.log('hello ' + userName);
}
greet();