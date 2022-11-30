function solution(n) {
    // n이 1이 될때까지 반복하는 반복문 작성
    // 반복문에서 n을 num으로 나누어 떨어졌을때 n을 num으로 나고 answer의 요소에 없을때 answer에 추가
    // answer 반환 
    var answer = [];
    let num = 1;
    let count = 0;
    while(n>1) {
        count=0;
        num++;
        if(n%num===0) {
            for(let i = 0; i<=answer.length; i++) {
                if(answer[i]===num) {
                    count++;
                }
            }
            if(count<1) {
                answer.push(num);
            }
            n=n/num;
            num=1;
        }

    }
    return answer;
}