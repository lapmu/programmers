function solution(a, b) {
    // 최대 공약수를 구하여 분자와 분모 모두 나누어준다
    // 분모가 2와 5로 이루어져있는지 확인한다.
    var answer = 1;
    let max = 0;
    for(let i = 2; i<=Math.min(a, b); i++) {
        if(a%i===0&&b%i===0) {
            max = i;
        }
    }
    if(max!==0) {
        b = b/max;   
    }
    
    while(b!==1) {
        if(b%2===0) {
            b = b/2;
        }else if(b%5===0) {
            b = b/5;
        }else{
            answer = 2;
            break;
        }
    }
    return answer;
}