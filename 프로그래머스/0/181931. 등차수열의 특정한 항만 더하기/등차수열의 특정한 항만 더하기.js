function solution(a, d, included) {
    let answer = 0;
    let add = 0;
    for(let i = 0; i < included.length ; i++){
        if(i === 0){
            add += a;
        }else{
            add += d;    
        }
        
        if(included[i]){
            answer += add;
        }
    }
    return answer;
}