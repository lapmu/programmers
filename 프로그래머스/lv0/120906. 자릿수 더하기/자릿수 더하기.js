function solution(n) {
    // 1. 문자열로 만들고 반복문 사용
    // 2. 배열로 만들고 reduce 사용
    return String(n).split('').reduce((acc, cur)=>{
        return Number(acc)+Number(cur)
    }, '0')
}