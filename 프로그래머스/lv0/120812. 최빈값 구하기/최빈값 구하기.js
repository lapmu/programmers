function solution(array) {
    // 1. 빈 객체, 빈 문자열 선언 할당
    // 2. 배열은 순회하는 반복문작성 
    // 3. 반복문에서 배열의 값을 key로 하고 횟수를 값으로 하는 객체 생성
    // 4. 반복문 밖에서 객체의 최대 값을 찾는 반복문 작성
    // 5. 반복문 밖에서 최대값의 같은값이 있는지 찾는 반복문 작성
    // 6. 같은값이 있다면 -1, 없다면 최대값 반환
    var answer = {};
    let result = '';
    let count = 0;
    let count2 = 0;
    
    for(let i = 0; i<array.length; i++) {
        if(answer[array[i]]===undefined) {
            answer[array[i]] = 1;
        }else{
            answer[array[i]]++;
        }
    }
    
    for(key in answer) {
        if(answer[key]>count) {
            count = answer[key];
            result = key;
        }
    }
    
    for(key in answer) {
        if(answer[key]===count) {
           count2++;
        }
    }
    if(count2>1) {
        result = '-1';
    }
            return Number(result);
}