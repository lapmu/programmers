function solution(str1, str2) {
    // str1, str2를 전부 소문자로 변환
    // str1, str2를 두 글자씩 끊어 배열을 만든다.
    // 만든 두 배열의 같은 요소를 교집합, 요소를 합친 배열을 합집합이라한다.
    // 교집합의 길이를 합집합의 길이로 나누어 65536을 곱한다.
    // 소수점 이하를 버리고 반환한다.
    
    const upperStr1 = str1.toUpperCase();
    const upperStr2 = str2.toUpperCase();
    const str1Arr = [];
    const str2Arr = [];
    const regExp = /^[a-zA-Z]*$/;
    
    for(let i = 0; i < upperStr1.length-1; i++){
        if(regExp.test(upperStr1[i]+upperStr1[i+1])){
            str1Arr.push(upperStr1[i]+upperStr1[i+1])
        }
            
    }
    
    for(let i = 0; i < upperStr2.length-1; i++){
        if(regExp.test(upperStr2[i]+upperStr2[i+1])){
            str2Arr.push(upperStr2[i]+upperStr2[i+1])
        }
            
    }

    if(str1Arr.length===0 && str2Arr.length===0){
        return 65536;
    }
    
    const copyStr2Arr = [...str2Arr];
    
    const intersection = str1Arr.filter((el)=>{
        const isIn = copyStr2Arr.indexOf(el)
        if(isIn!=-1){
            copyStr2Arr.splice(isIn, 1)
        }
        return isIn!=-1
    })

    
    const unionLength = str1Arr.length + str2Arr.length - intersection.length

    return Math.floor(intersection.length/unionLength*65536);
}