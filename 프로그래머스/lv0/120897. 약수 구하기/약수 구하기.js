function solution(n) {
    // 1부터 n까지 순회하는 반복문 작성
    // 반복문에서 n을 나누었을때 나누어 떨어지면 answer에 push
    // answer 반환
    var answer = [];
    for(let i = 1; i<=n; i++) {
        if(n%i===0) {
            answer.push(i);
        }
    }
    return answer;
}