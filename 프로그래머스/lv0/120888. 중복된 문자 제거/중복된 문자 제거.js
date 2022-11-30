function solution(my_string) {
    // 문자열을 순회하는 반복문 작성 
    // 반복문에서 요소가 answer에 없을 경우 answer에 추가
    // answer반환
    var answer = '';
    let count = 0;
    for(let i = 0; i<my_string.length; i++) {
        for(let j = 0; j<=answer.length; j++) {
            if(my_string[i]===answer[j]){
                count++;
            }
        }
        if(count === 0) {
                answer = answer + my_string[i];
            }
            count = 0;
    }
    return answer;
}