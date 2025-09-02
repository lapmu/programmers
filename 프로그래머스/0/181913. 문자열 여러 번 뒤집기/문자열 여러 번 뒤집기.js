function solution(my_string, queries) {
    return queries.reduce((acc, val)=>{
        let result = acc.slice(0, 0 + val[0]);

        for(let i = val[1] ; i >= 0 + val[0]; i--){
            result += acc[i];

        }
        result += acc.slice(val[1]+1)

        return result;
    }, my_string);
}