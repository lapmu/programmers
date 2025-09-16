function solution(arr, queries) {
    return queries.map((el)=>{
        const newEl = [];
        for(let i = el[0]; i<=el[1]; i++){
            if(el[2]<arr[i]){
                newEl.push(arr[i]);
            }
        }
        
        if(newEl.length===0)return -1;
        const newElSort = newEl.sort(function(a, b)  {
            return a - b;
        });

        return newElSort[0];
        
    });
}