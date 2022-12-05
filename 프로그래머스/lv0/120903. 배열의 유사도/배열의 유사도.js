function solution(s1, s2) {
    // s1을 순회하는 반복문 작성
    // 반복문에서 s2를 순회하는 반복문 작성
    // 두번째 반복문에서 s1의 요소와 s2의 요소가 같을 경우 answer++
    // answer 반환 
    var answer = 0;
    for(let i = 0; i<s1.length; i++) {
        for(let j = 0; j<s2.length; j++) {
            if(s1[i]===s2[j]) {
                answer++;
            }
        }
    }
    return answer;
}