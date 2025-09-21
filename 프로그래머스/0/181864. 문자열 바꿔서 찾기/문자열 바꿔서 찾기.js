function solution(myString, pat) {
    var answer = 0;
    let convertPat = '';
    for(let i = 0; i<pat.length; i++){
        if(pat[i]==='A'){
            convertPat += 'B';
        }else{
            convertPat += 'A';
        }
    }
    if(myString.length !== myString.replace(convertPat).length){
        answer = 1;
    }
    return answer;
}