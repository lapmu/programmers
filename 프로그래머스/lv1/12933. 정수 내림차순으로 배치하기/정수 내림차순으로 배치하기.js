function solution(n) {
    // n을 문자열로 변환
    // sort를 사용하여 정렬하고 숫자로 변환
    var answer = Number(String(n).split('').sort((a,b)=>{return b-a}).join(''))
    return answer;
}