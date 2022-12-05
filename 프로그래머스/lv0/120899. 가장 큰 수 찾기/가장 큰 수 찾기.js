function solution(array) {
    var answer = array.reduce((acc, cur)=>acc<cur?cur:acc)
    return [answer, array.indexOf(answer)];
}