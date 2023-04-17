function solution(num, total) {
    // total의 절반을 a에 할당
    // num의 수만큼 반복하는 반복문 작성
    // 반복문에서 반복횟수 뺀 값을 answer에 push
    // answer의 값을 모두 더하기
    // 모두 더한 값에 total이 될때까지 빼주기
    // 뺀 횟수를 answer의 각 요소에 빼준다
    
    var answer = [];
    let count = 0
    let a = total+1
    if(total===0) {
        a=total+num
    }
    
    for(let i = 0; i<num; i++){
        a--;
        answer.push(a)
    }
    
    let addAnswer = answer.reduce((acc, cur)=>{
        return acc+cur;
    }, 0)
    
    while(addAnswer>total){
        addAnswer=addAnswer-num;
        count++;
    }
    
    answer = answer.map((el)=>{
        return el-count;
    })
    
    return answer.sort((a,b)=>{
        return a-b
    });
}