function solution(fees, records) {
    const answer = [];
    const sequence = []
    
    const time = records.map(el => {
        const arr = el.split(' ');
        arr[0] = arr[0].split(':');
        arr[0] = arr[0][0] * 60 + +arr[0][1];
        return arr
    }).reduce((obj,el)=>{
        const isInner = sequence.indexOf(el[1]);
        
        if(isInner === -1){
            
            sequence.push(el[1])
        }
        
        
        
        if(!obj[el[1]]){
           obj[el[1]] = 0;
        }
        
        if(el[2]==="IN"){
           obj[el[1]] = obj[el[1]] - el[0]
        }else{
           obj[el[1]] = obj[el[1]] + el[0]
           
       }
        return obj
    }, {})
    
    sequence.sort((a,b)=>a-b)
    
    sequence.forEach(el => {
        
        if(time[el] <= 0){
            time[el] = 1439 + time[el];
        }
            
        if(time[el] <= fees[0]){
            answer.push(fees[1])
        }else{
            const totalPrice = fees[1] + Math.ceil((time[el] - fees[0])/fees[2]) * fees[3]
            answer.push(totalPrice)
        }
        
    })
    
    return answer
}