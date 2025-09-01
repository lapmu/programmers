function solution(number) {
    var answer = 0;
    let sumNum = 0;
    for(let i = 0; i<number.length; i++){
        sumNum += Number(number[i])
    }
    answer = sumNum % 9;
    return answer;
}