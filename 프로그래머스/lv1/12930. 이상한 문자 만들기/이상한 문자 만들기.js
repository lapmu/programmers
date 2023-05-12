function solution(s) {
    return s.split(' ').map(el=>{
        let result = '';
        for(let i = 0; i<el.length; i++){
            if(i%2){
                result = result + el[i].toLowerCase()
            }else{
                result = result + el[i].toUpperCase()
            }
        }
        return result;
    }).join(' ');
}