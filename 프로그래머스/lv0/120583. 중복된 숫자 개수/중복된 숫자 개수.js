function solution(array, n) {
    // 배열을 순회하는 반복문 작성
    // 반복문에서 배열의 요소가 n과 같을때 answer++
    // answer 반환
    var answer = 0;
    array.map(el=>{
        if(el===n) {
            answer++;
        }
    })
    return answer;
}