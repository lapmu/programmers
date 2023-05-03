function solution(left, right) {
    // left부터 right까지 반복하는 반복문 작성
    // 각 요소의 약수의 갯수를 구한다.
    // 갯수가 짝수일 경우 +, 홀수일 경우 - 
    let result = 0;
    
    for(let i = left; i<=right; i++){
        let count = 0;
        for(let j = 1; j<=i; j++){
            if(i%j===0){
                count++;
            }
        }
        if(count%2===0){
            result = result + i
        }else{
            result = result - i
        }
    }
    return result;
}