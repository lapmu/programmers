function solution(n, t, m, p) {
    // 문자열의 길이가 m*t의 갯수가 될때까지 반복하는 반복문 작성
    // 튜브가 말해야하는 숫자만 뽑기
    // 문자열로 반환
    
    let str = '';
    let num = 0;
    let result = '';
    
    while(str.length < m * t){
        str = str + num.toString(n).toUpperCase()
        num = num + 1;
    }
    
    for(let i = p - 1; i<str.length ; i += m){
        result = result + str[i]
        
        if(result.length===t) break;
    }
    console.log(str)
    return result;
}