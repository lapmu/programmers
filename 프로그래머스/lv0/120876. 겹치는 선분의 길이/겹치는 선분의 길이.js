function solution(lines) {
    // 두 선분이 겹치는지 판별
    // 겹치는 구간 구하기
    // 겹치는 구간 끼리 중복되나 확인
    // 겹치는 구간 길이 반환
    var answer = [];
    const result = [];
    for(let i = 0; i<lines.length-1; i++) {
        for(let j = i+1; j<lines.length; j++) {
            if(lines[i][0]<=lines[j][0]&&lines[i][1]>=lines[j][1]) {
                result.push(lines[j])
            }else if(lines[i][0]>=lines[j][0]&&lines[i][1]<=lines[j][1]) {
                result.push(lines[i])
            }else if(lines[i][0]<=lines[j][0]&&lines[i][1]<=lines[j][1]&&lines[j][0]<lines[i][1]) {
                result.push([lines[j][0], lines[i][1]])
            }else if(lines[i][0]>=lines[j][0]&&lines[i][1]>=lines[j][1]&&lines[j][1]>lines[i][0]) {
                result.push([lines[i][0], lines[j][1]])
            }
        }
    }
    let result2 = []
    for(let i = 0; i< result.length; i++) {
        const arr = [];
        for(let j = result[i][0]; j<=result[i][1]; j++) {
            arr.push(j)
        }
        result2 = [...result2, ...arr]
    }
    result2.sort((a, b)=>a-b)
    let preNum = ''
    let count = 0;
    let preCount = 0;

    for(let i = 0; i<result2.length; i++) {
        if(preNum!==result2[i]) {
            answer.push(result2[i])
            if(preCount<count) {
                preCount = count
            }
            count = 0;
        }else{
            count++;
        }
        preNum = result2[i]
    }
    let long = answer.length
    if(long!==0) {
        long = long-result.length + preCount;
    }
    return long;
}