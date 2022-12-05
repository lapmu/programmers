function solution(numbers) {
    // 문자의 숫자를 요소로 가진 배열을 선언
    // numbers의 문자를 숫자로 교체
    // 교체한 numbers반환
    let convNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let convNumbers = convNum.reduce((acc, cur, idx)=>{
        let result = acc.replaceAll(cur, idx)
        return result;
    }, numbers)
    return Number(convNumbers);
}