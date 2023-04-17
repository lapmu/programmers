function solution(arr) {
    // reduce로 arr의 요소를 전부 더한 값을 구한다
    // 더한 값을 arr 요소의 갯수로 나눈다
    var answer = 0;
    let addArr = arr.reduce((acc, cur)=> {
        return acc + cur;
    }, 0);
    answer = addArr/arr.length;
    return answer;
}