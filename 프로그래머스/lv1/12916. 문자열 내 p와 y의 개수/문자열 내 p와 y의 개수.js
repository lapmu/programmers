function solution(s){
    // s의 요소를 소문자로 변환
    // s 요소를 순회하는 반복문 작성
    // 반복문에서 요소가 p일 경우 pCounter에 ++
    // 반복문에서 요소가 y일 경우 yCounter에 ++
    // pCounter와 yCounter이 같지 않다면 answer에 false
    var answer = true;
    const lowerCaseS = s.toLowerCase();
    let pCounter = 0;
    let yCounter = 0;
    
    for(let i = 0; i<lowerCaseS.length; i++){
        if(lowerCaseS[i]==='p'){
            pCounter++;
        }else if(lowerCaseS[i]==='y'){
            yCounter++;
        }
    }
    if(pCounter!==yCounter){
        answer = false;
    }
    return answer;
}