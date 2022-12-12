function solution(my_str, n) {
    // 문자열을 배열로 만듦
    // 배열의 길이가 0이 될때 까지
    // 원하는 길이만큼 자르고 answer에 추가
    // 배열의 요소가 남았다면 answer에 추가
    // answer 반환
    var answer = [];
    let arr = my_str.split('');
    while(arr.length>0) {
        answer.push(arr.splice(0,n).join(''));
    }
    return answer;
}