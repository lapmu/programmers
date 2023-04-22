function solution(n) {
    // n을 문자열로 변환하고 배열로 변환
    // 변환한 n을 순회하는 반복문 작성
    // 반복문에서 순서대로 answer에 unshift하기
    // answer 반환
    var answer = [];
    let arrN = String(n).split('')
    
    for(let i = 0; i<arrN.length; i++){
        answer.unshift(Number(arrN[i]))
    }
    return answer;
}