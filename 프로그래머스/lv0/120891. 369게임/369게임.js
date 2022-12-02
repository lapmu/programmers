function solution(order) {
    // order를 문자열로 바꿈
    // 배열로 바꿈
    // 3,6,9의 갯수 반환
    var answer = 0;
    let arrOrder = String(order).split('');
    return arrOrder.reduce((acc, cur)=>{
        return cur==='3'||cur==='6'||cur==='9'?acc+1:acc;
    }, answer)
}