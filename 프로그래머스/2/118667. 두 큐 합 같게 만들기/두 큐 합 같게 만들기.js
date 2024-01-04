function solution(queue1, queue2) {
    //1 두개의 배열을 합하고 인덱스로 조절?
    let answer = -1;
    let count = 0
    let sumQueue1 = queue1.reduce((sum, el)=>{
            return sum + el;
        },0);
    let sumQueue2 = queue2.reduce((sum, el)=>{
            return sum + el;
        },0);
    const sumQueue = [...queue1, ...queue2];
    const length = queue1.length
    let queue1Idx = 0;
    let queue2Idx = length;
    
    while(length*3>count){

        if(sumQueue1 === sumQueue2) return count;
        
        if(sumQueue1 < sumQueue2){
            sumQueue1 = sumQueue1 + sumQueue[queue2Idx];
            sumQueue2 = sumQueue2 - sumQueue[queue2Idx];
            queue2Idx++;
            if(!sumQueue[queue2Idx]) queue2Idx = 0;
        }else{
            sumQueue1 = sumQueue1 - sumQueue[queue1Idx];
            sumQueue2 = sumQueue2 + sumQueue[queue1Idx];
            queue1Idx++;
            if(!sumQueue[queue1Idx]) queue2Idx = 0;
        }
        count ++;
    }
    
    return answer
}
    //2 배열의 모든 요소를 더했을때 큰 쪽에서 요소를 뽑아 넣어준다. 
//     let answer = -1;
//     let count = 0
//     let sumQueue1 = queue1.reduce((sum, el)=>{
//             return sum + el;
//         },0);
//     let sumQueue2 = queue2.reduce((sum, el)=>{
//             return sum + el;
//         },0);
//     const length = queue1.length
//     while(length*3>count){
        
//         if(sumQueue1 === sumQueue2) return count;
        
//         if(sumQueue1 < sumQueue2){
//             const shiftEl = queue2.shift()
//             queue1.push(shiftEl);
//             sumQueue1 = sumQueue1+shiftEl;
//             sumQueue2 = sumQueue2-shiftEl;
//         }else{
//             const shiftEl = queue1.shift()
//             queue2.push(shiftEl)
//             sumQueue1 = sumQueue1-shiftEl;
//             sumQueue2 = sumQueue2+shiftEl;
//         }
        
//         count++;
        
//     }
    
//     return answer;
// }