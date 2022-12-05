function solution(s) {
    // 빈 객체 선언
    // s를 순회하는 반복문 작성
    // 반복문에서 빈 객체 key에 s문자열의 요소가 없을 경우 추가
    // 있을 경우 객체 값 ++
    // 반복문 밖에서 객체의 key와 값을 순회하는 반복문 작성
    // 값이 1초과일 경우 제거
    // 나머지 값들을 오름차순으로 정렬후 반환
    let obj = {};
    var answer = '';
    for(let i = 0; i<s.length; i++) {
        if(obj[s[i]]) {
            obj[s[i]]++
        }else{
            obj[s[i]] = 1;
        }
    }
    for(let[key, value] of Object.entries(obj)) {
        if(value>1){
            delete obj[key];
        }
    }
    answer = Object.keys(obj);
    return answer.sort().join('');
}