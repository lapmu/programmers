function solution(price) {
    // 조건 : 소수점이하를 버린 정수를 반환
    // 1. 10만원 이상일 경우 5%할인3
    // 2. 30만원 이상일 경우 10%할인2
    // 3. 50만원 이상일 경우 20%할인1
    
    if(price>=500000) {
        return Math.floor(price*0.80);        
    }else if(price>=300000) {
        return Math.floor(price*0.9);
    }else if(price>=100000) {
        return Math.floor(price*0.95);
    }else{
        return price;
    }

}