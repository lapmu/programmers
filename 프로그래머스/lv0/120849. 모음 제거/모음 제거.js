function solution(my_string) {
    var answer;
    let arr = my_string.split('')
    answer = arr.filter((ele)=>{
        return 'a'!==ele && 'e'!==ele && 'i'!==ele && 'o'!==ele && 'u'!==ele
    })
    return answer.join('')
}