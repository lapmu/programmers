const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let value = '';
    for(let i = 0; i<str.length; i++){
        if(str[i] === str[i].toUpperCase()){
           value = value + str[i].toLowerCase()
            
        }else{
            value = value + str[i].toUpperCase()
        }
    }
    console.log(value)
});