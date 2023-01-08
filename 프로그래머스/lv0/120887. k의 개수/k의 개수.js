function solution(i, j, k) {
    // i부터 j까지 반복하는 반복문 작성
    // i를 문자열로 변환하고 i의 문자중 문자k가 몇번 등장하는지 등장함에 따라 answer++
    var answer = 0;
    for(i; i<=j; i++){
        const strI = String(i)
        for(let j = 0; j<strI.length; j++){
            if(strI[j]===String(k)){
                answer++;
            }
        }
    }
    return answer;
}