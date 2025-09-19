function solution(my_string, s, e) {
    const front = my_string.slice(0, s);
    const back = my_string.slice(e+1);
    let str = '';
    for(let i = e; i>=s; i--){
        str += my_string[i];
    }
    return front + str + back;
}