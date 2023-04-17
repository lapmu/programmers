function solution(num) {
    // num을 2로 나눈 나머지가 0이면 Even을 반환
    // 1이면 Odd를 반환
    var answer = 'Odd';
    if(num%2===0){
        answer = 'Even'
    }
    return answer;
}