function solution(n) {
    var answer = 0;
    const three = n.toString(3);
    let reThree = '';
    for(let i = 0; i<three.length; i++){
        reThree = reThree + three[three.length - 1 - i];
    }
    answer = parseInt(reThree, 3);
    return answer;
}