function solution(sides) {
    // sides요소를 비교 후 큰 값에서 작은 값 뺀후 +1 부터 큰값과 작은값을 더한값까지 반복문작성
    // 반복문에서 answer ++
    
    var answer = 0;
    let big = Math.max(...sides)
    let small = Math.min(...sides)
    for(let i = big-small+1; i<small+big; i++) {
        answer++;
    }
    return answer;
}