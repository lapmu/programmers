function solution(numbers) {
    // 결과값 넣어줄 빈배열 선언 
    // numbers의 길이를 a에 할당  
    // numbers를 순회하는 반복문 작성
    // 모든 요소를 2배하여 결과값에 push
    // 결과값 반환
    var answer = [];
    let a = numbers.length
    
    for(let i=0; i<=a-1; i++) {
        answer.push( numbers[i] * 2 );
    }
    return answer;
}