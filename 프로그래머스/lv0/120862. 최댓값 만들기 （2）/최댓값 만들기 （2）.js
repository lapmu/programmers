function solution(numbers) {
    // 배열을 순회하는 반복문 작성
    // 반복문 안에서 배열을 순회하는 반복문 작성
    // 반복문에서 배열의 두 요소의 곱이 기존 값 보다 클때 기존 값에 할당
    // 결과값 반환
    var answer = -100000000;
    for(let i = 0; i<numbers.length; i++) {
        for(let j = i+1; j<=numbers.length; j++) {
            if(numbers[i]*numbers[j]>answer) {
                answer = numbers[i]*numbers[j]
            }
        }
    }
    return answer;
}