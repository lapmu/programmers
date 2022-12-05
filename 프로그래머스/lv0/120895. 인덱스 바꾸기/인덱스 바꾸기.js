function solution(my_string, num1, num2) {
    // my_string을 순회하는 반복문 작성
    // 반복문에서 인덱스가 num1일 경우 num2의 값을 추가
    // 인덱스가 num2일 경우 num1을 추가
    // answer 반환
    var answer = '';
    for(let i = 0; i<my_string.length; i++) {
        if(i===num1) {
            answer = answer + my_string[num2];
        }else if(i===num2) {
            answer = answer + my_string[num1];
        }else{
            answer = answer + my_string[i];
        }
    }
    return answer;
}