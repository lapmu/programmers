function solution(num_list) {
    // 1. 배열을 순회하는 반복문 작성
    // 2. 반복문 안에서 역순으로 빈배열에 push
    // 3. 빈 배열 반환
    var answer = [];
    for(i=0; i<num_list.length; i++) {
        answer.push(num_list[num_list.length-1-i]);
    }
    return answer;
}