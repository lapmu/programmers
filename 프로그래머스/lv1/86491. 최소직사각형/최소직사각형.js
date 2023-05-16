function solution(sizes) {
    var answer = 0;
    const height = [];
    const width = [];
    sizes.map(size => {
        if(size[0]<size[1]){
            height.push(size[1]);
            width.push(size[0]);
        }else{
            height.push(size[0]);
            width.push(size[1]);
        }
    });
    answer = width.reduce((acc, cur)=>{
        if(acc<cur){
            return cur
        }else{
            return acc
        }
    }, 0) * height.reduce((acc, cur)=>{
        if(acc<cur){
            return cur
        }else{
            return acc
        }
    }, 0)
    return answer;
}