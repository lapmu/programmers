function solution(chicken) {
    // 1999 199번  9
    // 199   19번  9 208 20번 8
    // 19     1번  9 27  2번  7
    // 1           1 8   0번  
    // 각각의 나머지도 더해주기
    var answer = 0;
    let copyChicken = chicken
    let coupon = 0;
    let resCoupon = 0;
    while (copyChicken>=1){
        coupon = copyChicken + resCoupon
        resCoupon = coupon%10
        copyChicken = Math.floor(coupon/10)
        answer = answer + copyChicken
    }
    
    return answer ;
    
    // 1999개를 시킬경우 쿠폰은 1999개
    // 쿠폰 1999개로 시킬수있는 치킨 199개 쿠폰 208개 남음
    // 쿠폰 208개로 시킬수 있는 치킨 20개 쿠폰 28개 남음 
    // 쿠폰 28개로 시킬수 있는 치킨 2개 쿠폰 10개 남음
    // 쿠폰 10개로 시킬수 있는 치킨 1개 쿠폰 1개 남음 ?
    
}