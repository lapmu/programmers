function solution(my_string, overwrite_string, s) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        if(i < s || s + overwrite_string.length-1 < i){
            answer = answer + my_string[i]
        }else{
            answer = answer + overwrite_string[i-s]
        }
    }
    return answer;
}