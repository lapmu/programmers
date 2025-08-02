function solution(str1, str2) {
    var answer = '';
    for(let i = 0; i < str1.length + str2.length; i++){
        if(i%2===0){
            answer = answer + str1[i/2]
        }else{
            answer = answer + str2[Math.floor(i/2)]
            
        }
    }
    return answer;
}