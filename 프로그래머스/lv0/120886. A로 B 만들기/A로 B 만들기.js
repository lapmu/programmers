function solution(before, after) {
    // before를 순회하면서 after제거 
    // 제거후 빈문자열일 경우 1반환 아닐경우 0반환
    var answer = 0;
    for(let i = 0; i<before.length; i++){
        after = after.replace(before[i], '')
    }
    if(after==='') {
        answer = 1;
    }
    return answer;
}