function solution(s, n) {
    const lowerS = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    const upperS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var answer = '';
    for(let i = 0; i<s.length; i++){
        if(s[i]=== ' '){
            answer = answer + ' ';
            continue;
        }
        if(lowerS.indexOf(s[i])!==-1){
            answer = answer + lowerS[lowerS.indexOf(s[i]) + n];
        }else{
            answer = answer + upperS[upperS.indexOf(s[i]) + n];
        }
    }
    return answer;
}