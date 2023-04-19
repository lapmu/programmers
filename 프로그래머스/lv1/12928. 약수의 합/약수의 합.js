function solution(n) {
    // 1부터 n의 제곱근까지 반복하는 반복문 작성
    // 반복문에서 n이 i로 나눠지면 answer = answer + i + n/i
    // 반복문에서 n이 i로 나눠지고 i가 n의 제곱근이라면 answer = answer + i
    var answer = 0;
    for(let i = 1; i<=Math.sqrt(n); i++){
        if(n%i===0){
            if(i===Math.sqrt(n)){
                answer = answer + i;
            }else{
                answer= answer + i + n/i;
            }
        }
    }
    return answer;
}