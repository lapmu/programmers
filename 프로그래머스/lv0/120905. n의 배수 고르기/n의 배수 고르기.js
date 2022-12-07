function solution(n, numlist) {
    // numlist를 순회하는 반복문 작성
    // 반복문에서 numlist의 요소가 n으로 나누어 떨어질 경우 answer에 추가
    // answer 반환
    var answer = numlist.filter((el)=>!(el%n))
    return answer;
}