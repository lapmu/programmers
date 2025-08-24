function solution(start_num, end_num) {
    var answer = [];
    
    while(answer.length===0||answer.slice(-1)>end_num){
        answer.push(start_num)
        start_num --;
    }
    return answer;
}