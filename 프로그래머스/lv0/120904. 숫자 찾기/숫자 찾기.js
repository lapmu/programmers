function solution(num, k) {
    // num을 문자열로
    // num에 k가 있을 경우 인덱스+1을 반환
    // 없을 경우 -1을 반환 
    let strNum = String(num)
    if(strNum.includes(k)){
        return strNum.indexOf(k)+1
    }else{
    return -1
    }
}