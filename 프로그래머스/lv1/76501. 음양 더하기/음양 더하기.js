function solution(absolutes, signs) {
    // absolutes를 순회하는 반복문 작성
    // 반복문에서 absolutes[i]에 signs[i]가 true일 경우 +, false일 경우 -
    // answer 반환
    var answer = 0;
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i]){
            answer = answer + absolutes[i];
        }else{
            answer = answer - absolutes[i];
        }
    }
    return answer;
}