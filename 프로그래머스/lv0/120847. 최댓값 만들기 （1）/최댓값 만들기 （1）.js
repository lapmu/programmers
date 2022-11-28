function solution(numbers) {
    // 오름차순으로 정렬후 마지막 인덱스의 값과 그 전 인덱스의 값을 곱한다.
    var answer = 0;
    numbers.sort((a, b)=>a-b);
    answer = numbers[numbers.length-1]*numbers[numbers.length-2];
    return answer;
}