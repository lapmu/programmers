function solution(arr1, arr2) {
    // 행을 결정하는 반복문 작성
    // 열을 결정하는 반복문 작성
    // 반복문 에서 행 열에 해당하는 arr1, arr2 요소 더해서 answer에 배열에 넣기
    // answer 반환
    const insideArr = new Array(arr1[0].length).fill()
    var answer = new Array(arr1.length).fill().map(el=>[])

    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    return answer;
}