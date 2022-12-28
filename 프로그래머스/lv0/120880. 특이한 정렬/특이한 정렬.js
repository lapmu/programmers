function solution(numlist, n) {
    // 배열을 순회하며 거리 값을 따로 저장
    // 배열을 순회하며 오름차순으로 정렬

    const long = numlist.map(el=>Math.abs(el-n))
    for(let i = 0; i<numlist.length; i++) {
        for(let j = 0; j<numlist.length-i; j++) {
            if(long[j]>long[j+1]) {
                let a = numlist[j+1]
                numlist[j+1] = numlist[j]
                numlist[j] = a
                let b = long[j+1]
                long[j+1] = long[j]
                long[j] = b
            }else if (long[j]===long[j+1]) {
                if(numlist[j]<numlist[j+1]) {
                    let a = numlist[j]
                    numlist[j] = numlist[j+1]
                    numlist[j+1] = a
                    let b = long[j]
                    long[j] = long[j+1]
                    long[j+1] = b
                }
            }
        }
    }
    
    
    return numlist;
}