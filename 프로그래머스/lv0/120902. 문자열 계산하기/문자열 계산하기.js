function solution(my_string) {
    // my_string를 배열로
    // 배열을 순회하는 반복문 작성
    // 연산자를 찾고 그 앞뒤를 연산자에 맞는 계산하기
    let arrStr = my_string.split(" ");
    var answer = Number(arrStr[0]);

    for(let i = 1; i<arrStr.length; i++){
        if(arrStr[i]==='+'){
            answer = answer + Number(arrStr[i+1])
        }else if(arrStr[i]==='-'){
            answer = answer - Number(arrStr[i+1])
        }
    }
    return answer;
}