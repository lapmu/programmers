function solution(slice, n) {
    // 1. i=0부터 i<50까지 i는 1씩 증가
    // 2. 반복문에서 n-slice 을 n에 할당, answer++
    // 3. 반복문에서 n이 0보다 작다면 break
    // 4. answer 반환
    var answer = 0;
    for(let i=0; i<50; i++) {
        n = n - slice;
        answer++;
        if(n <= 0) {
            break;
        }
    }
    return answer;
}