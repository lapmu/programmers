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

function isArr(arr) {
    if(arr.length === 0)return arr;
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
    // 
    // 조합끼리 비교하여 중복 갯수를 구한다.
    // 중복 수가 많은 것만 결과에 추가한다.
    // 결과를 오름차순으로 정렬하여 반환한다.
    const combOrder = [];
    
    course.forEach(el=>{
        orders.forEach(order=>{
            combOrder.push(func(order, '', el, 0))
        })
    })
    
    const arr = isArr(combOrder).map(el=>{
        return el.split('').sort().join('')
    })
    
    const convertObj = arr.reduce((obj, el)=>{
       if(!obj[el]){
           obj[el] = 1;
       }else{
           obj[el]++;
       }
        return obj
    }, {})
    
    const keys = Object.keys(convertObj)
    
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
    
    return isArr(divisionKeys).sort()
    
}