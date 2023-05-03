function solution(price, money, count) {
    // 횟수를 순회하는 반복문 작성
    // 횟수만큼 증가해서 값을 money에서 뺀다
    // 반복문 밖에서 money가 +라며 0을 반환
    // -라면 모자란 값을 반환
    
    for(let i = 1; i<=count; i++){
        let newPrice = price * i;
        money = money - newPrice;
    }

    if(money>=0){
        return 0;
    }else{
        return -money;
    }
}