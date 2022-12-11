function solution(array) {
    // 베열을 순회하는 반복문 작성
    // 반복문에서 요소를 문자열로 변환 후 그 배열을 순회하는 반복문 작성
    // 두번째 반복문에서 배열 요소의 요소가 7일 경우 answer ++
    // 반복문 밖에서 answer반환
    var answer = 0;
    for(let i = 0; i<array.length; i++) {
        let strArr = String(array[i]);
        for(let j = 0; j<strArr.length; j++) {
            if(strArr[j]==='7'){
                answer++;
            }
        }
    }
    return answer;
}