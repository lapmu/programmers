function solution(record) {
    const splitRecord = record.map(el => el.split(' '));
    
    const names = splitRecord.reduce((obj, el)=>{

        if(el[2] !== undefined){
            obj[el[1]] = el[2];
        }
        return obj
    }, {})
    
    return splitRecord.filter(el=>{
        return el[0] !== 'Change'
    }).map(el=>{
        if(el[0] === "Enter"){
            return `${names[el[1]]}님이 들어왔습니다.`
        }else if(el[0] === "Leave"){
            return `${names[el[1]]}님이 나갔습니다.`
        }
    })
}