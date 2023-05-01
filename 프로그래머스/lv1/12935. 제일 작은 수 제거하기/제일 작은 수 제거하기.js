function solution(arr) {
    if(arr.length===1){
        return [-1];
    }
    const minEl = arr.reduce((min, num)=>{
        if(min<num){
            return min
        }else{
            return num
        }
    });
    var answer = arr.filter((num)=>num!==minEl);
    
    return answer;
}