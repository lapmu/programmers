function solution(t, p) {
    const arr = [];
    for(let i = 0; i < t.length; i++){
        if(t.slice(i,i+p.length).length===p.length){
            arr.push(t.slice(i,i+p.length))
        }
    }
    return arr.filter(el=>Number(el)<=Number(p)).length
}