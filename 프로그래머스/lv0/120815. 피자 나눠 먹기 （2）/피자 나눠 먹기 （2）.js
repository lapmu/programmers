function solution(n) {
    // 1. i = 2부터 i<17까지 i는 1씩 증가
    // 2. 반복문에서 n을 6으로 나눈 나머지가 0일 경우 break;
    // 3. 아닐 경우 i가 2보다 크다면 n을 i-1로 나눈 값을 n에 할당
    // 4. n 곱하기 i를 n에 할당
    // 5. answer 반환
    
    var answer = 1;
    for(let i = 2; i<17; i++) {
        if(n%6===0) {
            answer = n/6
            break;
        }else{
            if(i>2) {
                n=n/(i-1)
            }
            n=n*i;
        }
    }
    return answer;
}