function solution(array, height) {
    // 배열의 요소 중 hieght보다 큰 수를 필터
    // 필터한 배열의 길이 반환
    
    return array.filter(el=>el>height).length;
}