function solution(intStrs, k, s, l) {
    return intStrs.reduce((acc, val)=>{
        let result = [...acc];
        let sliceStr = Number(val.slice(s, s+l));

        if(sliceStr>k){
            result.push(sliceStr);
        }

        return result;
    }, [])
}