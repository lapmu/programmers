function solution(numbers) {
    var answer = 0;
    let basicNums = Array(10).fill(0).map((num, idx)=>idx)
    
    numbers.map((num)=>{
        basicNums = basicNums.filter((basicNum)=>basicNum!==num)
    })
    
    answer = basicNums.reduce((add, basicNum)=>{
        return add + basicNum;
    }, 0)
    
    return answer;
}