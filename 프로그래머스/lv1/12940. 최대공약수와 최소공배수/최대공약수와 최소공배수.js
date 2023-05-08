function solution(n, m) {
    // 각각의 약수 구하고 최대 공약수 찾기
    // n * m / 최대공약수 === 최대 공배수
    var answer = [];
    const divisorN = [];
    const divisorM = [];
    for(let i = 1; i<=n; i++){
        if(n%i===0){
            divisorN.push(i);
        }
    }
    for(let i = 1; i<=m; i++){
        if(m%i===0){
            divisorM.push(i);
        }
    }
    
    const commonDivisor = divisorN.filter(divisor=>divisorM.filter(el=>el===divisor)[0]);
   
    answer.push(commonDivisor.pop())
    answer.push(n * m / answer[0])
    return answer;
}