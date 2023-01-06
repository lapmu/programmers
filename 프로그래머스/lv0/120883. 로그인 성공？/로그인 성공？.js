function solution(id_pw, db) {
    // db를 순회하는 반복문 작성
    // 아이디가 다를 경우 fail반환
    // 비밀번호가 다를경우 wrong pw반환
    // 둘다 일치하면 login반환
    var answer = 'fail';
    for(let i = 0; i<db.length; i++) {
        if(id_pw[0]===db[i][0]&&id_pw[1]===db[i][1]) {
            answer = 'login'
            break;
        }else if(id_pw[0]===db[i][0]) {
            answer = 'wrong pw'
            break;
        }
    }
    return answer;
}