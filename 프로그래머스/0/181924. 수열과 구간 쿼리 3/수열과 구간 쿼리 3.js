function solution(arr, queries) {
    return queries.reduce((acc, val)=>{
        let i = acc[val[0]];
        acc[val[0]] = acc[val[1]];
        acc[val[1]] = i;
        return acc
    }, arr);
}