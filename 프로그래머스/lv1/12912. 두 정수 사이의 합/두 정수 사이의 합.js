function solution(a, b) {
    // a부터 b까지 순회하는 반복문 작성
    // 반복문에서 i값 더하기
    var answer = 0;
    if(a>b){
        [a, b] = [b, a]
    }
    for(let i = a; i<=b; i++){
        answer = answer + i;
    }
    return answer;
}