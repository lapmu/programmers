function solution(num_list, n) {
    const newList = [...num_list]
    for(let i = 0; i<n; i++){
        let el = newList.shift()
        newList.push(el)
    }
    return newList;
}