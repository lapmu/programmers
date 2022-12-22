function solution(n) {
    // n까지 반복하는 반복문 작성
    // 반복문에서 answer++
    // if answer가 3으로 나누어 떨어진다면 answer++
    // answer 반환
    var answer = 0;
    for(let i = 1; i<=n; i++) {
        answer++;
        while(answer%3===0||String(answer).includes('3')){
            answer++;
        }
    }
    return answer;
}