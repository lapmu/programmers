function solution(my_string) {
    // 임시 저장소 선언
    // 문자열을 순회하는 반복문 작성
    // 숫자로 변환시 NaN이 아닐 경우 임시 저장소에 문자열 그대로 추가
    // NaN일 경우 임시 저장소의 값을 숫자로 변환하여 answer에 추가, 임시 저장소 초기화
    // answer반환
    var answer = 0;
    let num = '';
    for(let i = 0; i<my_string.length; i++) {
        if(!Number.isNaN(Number(my_string[i]))){
           num = num + my_string[i];
            if(i===my_string.length-1) {
                answer = answer + Number(num);
            }
           }else{
               answer = answer + Number(num);
               num = '';
           }
    }
   
    return answer;
}