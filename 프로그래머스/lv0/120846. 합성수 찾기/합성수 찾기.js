function solution(n) {
    // 1부터 n까지 순회하는 반복문 작성
    // 반복문 안에서 i가 합성수인지 판별
    let count = 0;
    var answer = 0;
    for(let i = 1; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            if(!(i%j)) {
                count++;
            }
        }
        if(count>=3) {
            answer++;
        }
        count=0;
    }
    return answer;
}