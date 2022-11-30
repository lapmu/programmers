function solution(my_string) {
    // my_string을 순회하면서 숫자인지 아닌지 판별
    // 숫자일 경우 모두 더한 후 반환 
    var answer = 0;
    let arrNum = my_string.split('').filter((ele)=>!isNaN(ele));
    let num = arrNum.map(ele=>Number(ele))
    let sumNum = num.reduce((acc, cur) =>{
       return acc + cur 
    }, 0)
    return sumNum;
}