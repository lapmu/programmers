function solution(my_string) {
    // 0부터 9까지의 문자열을 가진 변수 선언
    // my_string의 문자열 하나하나를 위의 변수와 비교하여 같을경우 answer에 추가
    // answer 오름차순 정렬후 반환
    let strNum = '0123456789';
    var answer = [];
    for(let i = 0; i<my_string.length; i++) {
        for(let j = 0; j<strNum.length; j++) {
            if(my_string[i]===strNum[j]){
                answer.push(Number(my_string[i]));
            }
        }
    }
    
    
    return answer.sort((a, b)=>a-b)
}