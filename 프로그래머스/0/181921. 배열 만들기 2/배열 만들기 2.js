function solution(l, r) {
    var answer = [];
    for(let i = l; i<=r; i++){
        let reI = i + '';
        let reI2 = reI.replaceAll('0','')
        let reI3 = reI2.replaceAll('5','')
        if(!reI3){
            answer.push(i)
        }
    }
    if(answer.length===0){
        answer.push(-1)
    }
    return answer;
}