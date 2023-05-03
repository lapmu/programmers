function solution(a, b) {
    // a의 길이를 순회하는 반복문 작성
    // 반복문에서 반복 횟수를 인덱스로 갖는 a의 요소와 b의 요소를 곱한다.
    // 결과 반환
    let result = 0;
    
    for(let i = 0; i<a.length; i++){
        result = result + a[i]*b[i];
    }
    return result;
}