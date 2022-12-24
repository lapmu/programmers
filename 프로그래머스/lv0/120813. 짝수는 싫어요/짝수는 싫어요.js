function solution(n) {
    // 1. i=1부터 i<=n까지 i는 1씩 증가
    // 2. 반복문에서 i&2가 참이라면 push 매서드를 사용하여 n을 answer안에 추가
    // 3. answer 반환
    
    var answer = [];
    
    for (let i = 1; i<=n; i++) {
        if(i%2) {
            answer.push(i);
        }
    }
    return answer;
}