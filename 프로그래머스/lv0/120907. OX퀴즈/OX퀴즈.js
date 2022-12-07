function solution(quiz) {
    // 배열의 요소를 공백 기준으로 나눈다
    // 수식이 맞는지 판별
    return quiz.map(el=>{
        let arr = el.split(' ');
        return (arr[1]==='+')?Number(arr[0])+Number(arr[2]) === Number(arr[4])?"O":"X":
        (Number(arr[0])-Number(arr[2]) === Number(arr[4]))?"O":"X"
    })
}