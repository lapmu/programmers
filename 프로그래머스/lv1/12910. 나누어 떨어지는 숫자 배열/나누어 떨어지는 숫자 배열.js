function solution(arr, divisor) {
    // arr의 요소가 divisor으로 나누어 떨어지는지 확인후 필터
    // 필터한 arr의 길이가 0일 경우 -1 반환
    // 필터한 arr의 길이가 0이 아닐 경우 필터한 arr 반환
    const filteredArr = arr.filter((el)=>el%divisor===0)
    const sortFilteredArr = filteredArr.sort((a,b)=>a-b)
    if(filteredArr.length===0) {
        return [-1]
    }
    return filteredArr
}