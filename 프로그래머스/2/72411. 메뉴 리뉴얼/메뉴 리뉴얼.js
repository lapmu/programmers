// order를 기준으로 모든 조합을 찾는 제귀
function func(order, str, num, i) {
    const result = [];
    if(num === str.length) return str
    for(i ; i< order.length; i++){
        let addStr = str + order[i];
        const value = func(order, addStr, num, i+1);
        if(value.length !==0){
            result.push(value)
        }
        
    }
        return result
}
// 다중 배열을 단일 배열로 만드는 제귀
function isArr(arr) {
    if(arr.length === 0) return arr;
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            result.push(...isArr(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}

function solution(orders, course) {
    // course의 요소를 기준으로 order의 조합을 만든다.
    
    const combOrder = [];
    
    course.forEach(el=>{
        orders.forEach(order=>{
            combOrder.push(func(order, '', el, 0))
        })
    })
    
    // 다차원 배열을 일차원 배열로 만들고 각 요소를 오름차순 정렬한다.
    const arr = isArr(combOrder).map(el=>{
        return el.split('').sort().join('')
    })
    
    // 조합끼리 비교하여 중복 갯수를 구한다.
    const convertObj = arr.reduce((obj, el)=>{
       if(!obj[el]){
           obj[el] = 1;
       }else{
           obj[el]++;
       }
        return obj
    }, {})
    
    const keys = Object.keys(convertObj)
    // 원하는 메뉴의 길이가 같고 중복 수가 1초과만 남긴다.
    const divisionKeys = course.map(el=>{
        return keys.filter(key=>{
            return el === key.length
        })
    })
    .map(el=>{
        return el.filter(ell=>{
            return convertObj[ell] !== 1;
        })
    }).map(el=>{
        return el.reduce((acc, cur)=>{
            if(acc.length===0){
                acc.push(cur)
            }else{
                if(convertObj[acc[0]]<convertObj[cur]){
                    acc = [cur];
                }else if(convertObj[acc[0]]===convertObj[cur]){
                    acc.push(cur)
                }
            }
            
            return acc
        }, [])
    })
    
    // 일차원 배열로 만들고 오름차순으로 정렬한 다음 반환
    return isArr(divisionKeys).sort()
    
}