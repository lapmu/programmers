function solution(num_list) {
    // 0보다 작은지 판별
    // 0보다 작을 경우 반복문을 종료하고 해당 인덱스 반환
    // 0보다 작은 수가 없을 경우 -1반환
    let answer = -1;
    
    for(let i = 0; i<num_list.length; i++) {
        if(num_list[i]<0){
            answer = i;
            break;
        }
    }
    return answer;
}