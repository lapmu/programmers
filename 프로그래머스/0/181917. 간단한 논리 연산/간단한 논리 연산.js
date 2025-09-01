function solution(x1, x2, x3, x4) {
    var answer = true;
    if(!((x1||x2)&&(x3||x4))){
        answer = false;
    };
    return answer;
}