function solution(money) {
    // 1. 반복문을 사용하여 음수가 되지 않을때까지 5500을 빼준다.
    // 2. 나머지와 반복문의 반복횟수를 배열에 넣어 출력한다.
    var answer = [];
    let count = 0;
    for(let i = 1; i<200; i++) {
        if(money>=5500) {
            money=money-5500;
            count++;
        }else{
            break;
        }
    }
    return answer = [count, money];
    
}