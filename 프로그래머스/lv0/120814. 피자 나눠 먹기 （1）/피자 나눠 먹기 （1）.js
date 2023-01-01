function solution(n) {
    // 1. i=0부터 i<15까지 i는 1씩 증가 (피자수 세기)
    // 2. 반복문에서 n이 7보다 크거나 같다면 n-7 answer++
    // 3. 반복문 밖에서 n이 0이 아닐 경우 answer++ 
    // 3. answer 반환
    var answer = 0;
    for(let i =0; i<15; i++) {
        if(n>=7) {
            n=n-7;
            answer++;
        }
    }
    if(n) {
        answer++;
    }
    return answer;
}