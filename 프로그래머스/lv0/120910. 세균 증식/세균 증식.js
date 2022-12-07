function solution(n, t) {
    // t까지 반복하는 반복문 작성
    // 반복문에서 n은 두배씩 증가
    // n 반환
    for(let i=0; i<t; i++) {
        n=n*2;
    }
    return n;
}