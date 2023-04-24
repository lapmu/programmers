function solution(n) {
    // n의 제곱근을 구한다.
    // n의 제곱근이 0보다 큰지 판별
    // 크다면 n의 제곱근에 1을 더한 것의 제곱을 반환
    // 작다면 -1반환
    var answer = -1;
    let x = Math.sqrt(n)
    if(Number.isInteger(x)){
        x++;
        answer = x*x
    }
    return answer;
}