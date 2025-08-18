function solution(num_list) {
    const sec = num_list.reduce((acc, val)=>{
        if(val%2){
            acc[1] += val
        }else{
            acc[0] += val
        }
        return [acc[0], acc[1]]
    },['','']).map(el=>Number(el))
    return sec[0] + sec[1]
}