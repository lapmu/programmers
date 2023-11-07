function solution(cacheSize, cities) {
    // 실행시간, 캐시 변수 생성
    // cities를 순회하는 반복문 작성
    // 반복문에서 캐시 안에 요소가 있는지 판별
    // 없을 경우 캐시의 길이가 cacheSize보다 작은지 판별
    // cacheSize보다 캐시의 길이가 작을 경우 캐시 앞에 추가 후 실행시간 +5
    // 클 경우 캐시 마지막 요소를 제거 후 앞에 추가 후 실행시간 +5
    // 캐시 안에 요소가 있을 경우 해당 요소를 제거하고 가장 앞에 추가 후 실행시간 +1
    
    let time = 0;
    const cache = [];
    
    if(cacheSize===0){
        return cities.length*5
    }
    
    const lowerCities = cities.map((city)=>{
        return city.toLowerCase();
    })

    lowerCities.forEach((city) => {
        const index = cache.indexOf(city);
        if(index === -1) {
           if(cache.length < cacheSize) {
               cache.unshift(city);
               time = time + 5;
           }else{
               cache.pop()
               cache.unshift(city);
               time = time + 5;
           }
        }else{
            cache.splice(index, 1)
            cache.unshift(city);
            time++;
        }
    })
    return time
}