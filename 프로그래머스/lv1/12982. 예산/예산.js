function solution(d, budget) {
    // d를 오름차순으로 정렬
    // d를 순회하는 반복문 작성
    // 반복문에서 d의 요소를 budget에서 뺀다.
    // answer++;
    // budget보다 d가 클경우 break;
    var answer = 0;
    d.sort((a,b)=>a-b)
    for(let i = 0; i<d.length; i++){
        if(budget<d[i]){
            break;
        }
        budget = budget - d[i];
        answer++;
    }
    
    return answer;
}