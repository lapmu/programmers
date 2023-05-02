function solution(n) {
    // n을 2로 나누고 몫과 나머지를 구한다.
    // '수박'을 몫만큼 반복하고 나머지 만큼 글자를 추가한다.
    const share = Math.floor(n/2);
    const rest = n%2;
    let answer = '';
    
    for(let i = 0; i<share; i++){
        answer = answer + '수박';
    }
    
    if(rest===0){
        return answer;
    }
    
    answer = answer+'수';
    return answer;
}