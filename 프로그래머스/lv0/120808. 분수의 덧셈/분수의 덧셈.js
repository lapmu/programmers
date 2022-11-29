function solution(denum1, num1, denum2, num2) {
    // a선언 분자 더한값 할당, b선언 분모 더한값 할당
    // a와 b의 최대 공약수를 할당해줄 max 선언
    // 최대 공약수를 찾는 반복문 작성
    // a와 b에 최대 공약수인 max를 나누어주고 반환
let a = (denum1*num2)+(denum2*num1);
let b = num1*num2;
let max;
    
    for(let i=1; i<=b; i++) {
        if(a%i===0 && b%i===0) {
            max=i;
        }
    }
    return [a/max, b/max];
}