function solution(my_string) {
    // 문자열을 대문자로 바꿈 
    // 바꾼 문자와 아닌 문자가 같을 경우 그 문자 요소를 소문자로 변경
    var answer = '';
    let str = my_string.toUpperCase();
    for(let i=0; i<my_string.length; i++) {
        if(my_string[i]===str[i]) {
            answer=answer+str[i].toLowerCase()
        }else{
            answer=answer+str[i]
        }
    }
    return answer;
}