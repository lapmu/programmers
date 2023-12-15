function func(letter, alpa, msg, i){
    const j = i + 1
    const num = alpa.indexOf(letter);
    letter = letter + msg[j]
    
    if(alpa.indexOf(letter) === -1) return [letter, num];
    
    return func(letter, alpa, msg, j)
}

function solution(msg) {
    const answer = [];
    const alpa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i = 0; i < msg.length; i++){
        const result = func(msg[i], alpa, msg, i);
        answer.push(result[1] + 1);
        alpa.push(result[0])
        if(result[0].length>2){
            i = i + result[0].length - 2;
        }
    }
    return answer;
}