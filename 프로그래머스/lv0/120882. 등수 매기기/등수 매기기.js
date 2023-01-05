function solution(score) {
    // score 평균 구하기
    // 평균 내림차순으로 정렬
    // 빈 객체에 평균을 key로 하고 등수를 값으로 하는 객체 생성
    // 평균 배열을 순회하며 값을 등수로 변환
    // 변환한 배열 반환
    const answer = [];
    const mapping = score.map(el=>{
        return (el[0]+el[1])/2
    })
    const mappingSlice = mapping.slice(0)
    mapping.sort((a, b)=>b-a)
    const rank = {}
    let count = 1
    for(let i = 0; i<mapping.length; i++) {
        if(mapping[i]===mapping[i-1]) {
            count++
            
        }else{
            rank[mapping[i]] = i + 1;
            
        }
    }
    for(let i = 0; i<mapping.length; i++) {
        answer.push(rank[mappingSlice[i]])
    }
    return answer
}