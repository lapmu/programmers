function solution(n) {
    // 1부터 n을 나누는 반복문 작성
    // 반복문에서 answer++
    // answer반환
    var answer = 0;
    for(let i = 1; i<=10; i++) {
        if(n>=i) {
            n=n/i;
            answer++;
        }else{
            break;
        }
    }
    return answer;
}