function solution(common) {
    // 1번째 인덱스 값 - 0번째 인덱스 값이 마지막 인덱스 값 - 마지막 -1 인덱스 값이랑 같을 경우 등차수열
    // 1번째 인덱스 값 / 0번째 인덱스 값이 마지막 인덱스 값 / 마지막 -1 인덱스 값이랑 같을 경우 등비수열
    // 등차수열일 경우 마지막 요소에 공차를 더한다
    // 등비수열일 경우 마지막 요소에 공비를 곱한다
    var answer = 0;
    if(common[1]-common[0]===common[common.length-1]-common[common.length-2]){
        answer = common[common.length-1]+common[1]-common[0];
    }
    if(common[1]/common[0]===common[common.length-1]/common[common.length-2]){
        answer = common[common.length-1]*common[1]/common[0];
    }
    return answer;
}