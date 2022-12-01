function solution(array, n) {
    // 배열의 요소에서 n을 뺀 값의 절대 값의 가장 작은 수를 반환 
    var answer = 0;
    return array.reduce((acc, cur)=>{
        return Math.abs(acc-n)>Math.abs(cur-n)||(Math.abs(acc-n)===Math.abs(cur-n)&&acc>cur)?cur:acc});
}