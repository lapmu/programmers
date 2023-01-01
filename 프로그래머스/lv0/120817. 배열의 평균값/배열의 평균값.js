function solution(numbers) {
    // 1. i=0부터 i<numbers.length까지 i는 1씩 증가
    // 2. 반복문에서 answer에 answer+numbers[i] 할당
    // 3. 반복문 밖에서 answer에 answer/numbers.length 할당
    // 4. answer 반환
    var answer = 0;
    for(let i = 0; i < numbers.length; i++) {
        answer = answer + numbers[i];
    }
    answer = answer/numbers.length;
    return answer;
}