function solution(box, n) {
    // 배열의 각 요소를 n으로 나눈후 내림한다.
    // 각 요소 곱하기!
    var answer = 0;
    let arr = box.map((ele)=> Math.floor(ele/n));
    answer = arr[0] * arr[1] * arr[2]
    return answer;
}