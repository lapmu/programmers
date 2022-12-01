function solution(sides) {
    // 큰 값찾기
    // 큰 값 제거 후 큰값과 나머지 더한값 비교 반환

    let max = sides[0]
    let maxIdx = 0;
    for(let i = 1; i<sides.length; i++) {
        if(max<sides[i]) {
            max = sides[i];
            maxIdx = i;
        }
    }
    sides.splice(maxIdx, 1);
    let sidesSum= sides[0]+sides[1];
    if(sidesSum > max) {
        return 1;
    }else{
        return 2;
    }

}