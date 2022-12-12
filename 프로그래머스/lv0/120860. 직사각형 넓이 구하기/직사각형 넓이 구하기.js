function solution(dots) {
    // 배열을 순회하는 반복문 작성
    // 반복문에서 배열의 요소중 완전히 다른 요소를 찾는다.
    // 찾은 각 배열 요소의 요소를 서로 빼주고 곱한다.
    //절대값으로 반환
    var answer = 0;
    let arr = dots[0]
    for(let i = 1; i<dots.length; i++) {
        if(arr[0]!==dots[i][0]&&arr[1]!==dots[i][1]) {
            answer = Math.abs((arr[0]-dots[i][0])*(arr[1]-dots[i][1]))
            break;
        }
    }
    return answer;
}