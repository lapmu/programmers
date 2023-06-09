function solution(s) {
    const sNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    sNumber.map((el,idx)=>{
        s = s.replaceAll(el, idx)
    })
    return Number(s);
}