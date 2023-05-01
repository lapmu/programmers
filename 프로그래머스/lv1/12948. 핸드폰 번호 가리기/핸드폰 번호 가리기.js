function solution(phone_number) {
    // phone_number의 길이 -4 만큼 반복하는 반복문 작성
    // 반복문에서 answer에 *추가
    // 반복문 밖에서 answer에 뒷 4자리 숫자 추가
    // answer반환
    var answer = '';
    const behindPhone_number = phone_number.slice(-4);
    
    for(let i = 0 ; i<phone_number.length - 4; i++){
        answer = answer + '*';
    }
    
    answer = answer + behindPhone_number;
    
    return answer;
}