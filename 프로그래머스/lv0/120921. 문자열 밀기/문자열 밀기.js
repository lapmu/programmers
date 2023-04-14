function solution(A, B) {
    // 만약 A와 B가 같다면 answer = 0
    // 만약 A와 B가 같지않다면 아래의 코드를 수행한다.
    // A를 배열로 변환
    // A 길이만큼 반복하는 반복문 작성
    // 반복문에서 반복할 때마다 가장 뒤에 있는 문자를 pop해서 가장 앞으로 unshift, answer++
    // 위치를 바꾼 문자가 B와 같을 때 break 후 answer반환
    var answer = -1;
    if(A===B){
        answer = 0
    }else{
        let arrA = A.split('')
        
        for(let i = 0; i<A.length; i++){
            let str = arrA.pop() 
            arrA.unshift(str)
            if(arrA.join('')===B){
                answer = i + 1
                break;
            }
        }
    }
    return answer;
}