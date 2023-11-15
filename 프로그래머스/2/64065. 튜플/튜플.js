function solution(s) {
    const resource = [];
    const obj = {};
    let num = '';
    const sArr = s.split('');
    const filter = sArr.filter((el)=>{
        return el!='{' && el!='}'
    });
    
    filter.forEach((el, idx)=>{
        if(filter[idx+1]===','|| !filter[idx+1]){
            num = num + el
            resource.push(Number(num))
            num = ''
        }else if(el!=','){
            num = num + el
        }
    });
    
    resource.forEach((el)=>{
        if(!obj[el]){
            obj[el] = 1;
        }else{
            obj[el] = obj[el] + 1;
        }
    });
    
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    
    values.sort((a, b)=>b-a);
    
    return values.map((el1)=>{
        const filtered = keys.filter((el2)=>{
            return el1===obj[el2]
        })
        return Number(filtered[0])
    });
};