function solution(s) {
    // 배열로 만든다.
    // 배열을 순회하는 반복문 작성 
    // 반복문에서 배열의 요소가 Z일 경우 전에 더했던 수를 뺀다.
    // 아닐경우 더한다
    // 더한 값 반환
    var answer = 0;
    let arrS = s.split(' ');
    for(let i = 0; i< arrS.length; i++) {
        if(arrS[i]==='Z') {
            answer = answer - Number(arrS[i-1])
        }else{
            answer = answer + Number(arrS[i])
        }
    }
    return answer;
}