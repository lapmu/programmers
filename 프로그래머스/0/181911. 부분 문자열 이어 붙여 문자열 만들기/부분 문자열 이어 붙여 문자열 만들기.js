function solution(my_strings, parts) {
    return parts.reduce((acc, val, idx)=>{
        let result = acc;
        result += my_strings[idx].slice(val[0], val[1] + 1);
        return result
    }, '');
}