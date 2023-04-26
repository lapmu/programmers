function solution(x) {
    // x를 배열로 변환
    // 배열로 변환한 x의 요소를 전부 더한 값을 x의 length로 나눔
    // 나머지가 있을경우 answer을 false
    // answer 반환
    var answer = true;
    let arrX = String(x).split('');
    let addArrX = arrX.reduce((result, num)=>{
        return result + Number(num);
    }, 0)

    if(x%addArrX!==0){
        answer = false;
    }
    return answer;
}