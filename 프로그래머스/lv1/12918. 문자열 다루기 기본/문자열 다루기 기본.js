function solution(s) {
    // replace + 정규표현식으로 숫자 제거
    // 위 과정을 거친 문자열이 빈문자열이 아닐경우 answer을 false로 할당
    var answer = true;
    if(s.length!==4&&s.length!==6){
        return false;
    }
    const replacedS = s.replace(/[0-9]/g, '');
    if(replacedS.length!==0){
        answer = false;
    }
    return answer;
}