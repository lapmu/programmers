function solution(str1, str2) {
    // 1.includes사용
    // includes가 참일 경우 1 거짓일 경우 2
    
    // 2.indexOf사용
    // indexOf가 -1일 경우 2 아닐 경우 1 
    var answer = 0;
    if(str1.includes(str2)) {
        answer = 1;
    }else{
        answer = 2;
    }
    
    return answer;
}