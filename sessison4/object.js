window.onload = () => {
    let x = Math.floor(Math.random()*11);
    let y = Math.floor(Math.random()*11);
    let operator = ['+','-','*','/'];
    let op = operator[Math.floor(Math.random()*operator.length)]
    
    let result = calc(x, y, op);

    let errors = [-1, 0, 0, 0, 0, 1];
    let error = errors[Math.floor(Math.random()*errors.length)]
    let displayResult = result + error;
    console.log(`${x} ${op} ${y} = ${displayResult}`)
    let answer = prompt("Y/N?").toLowerCase();
    
    if (error === 0) {
        if(answer === 'y') {
            console.log('yay');
        }else {
            console.log('wrong');
        }
    }else {
        if(answer === 'n'){
            console.log('yay');
        }else{
            console.log('wrong');
        }
    }
    
};

