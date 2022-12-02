function solution(cipher, code) {
    // 문자열을 부분적으로 순회하는 반목문 작성
    // 반복문에서 code에 해당하는 문자열 answer에 추가한 후 answer반환

    var answer = '';
    for(let i = code-1; i<cipher.length; i+=code) {
        answer=answer+cipher[i];
    }
    return answer;
}