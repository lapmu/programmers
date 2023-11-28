function solution(n, k) {
    // 0P0 === 소수 앞뒤로 0
    // P0 === 뒤는 0, 앞은 없다(즉, 가장 앞이다)
    // 0P === 앞은 0, 뒤는 없다(즉, 가장 마지막이다)
    // P === P가 모든 요소 그 자체
    const nConvert = n.toString(k);
    const primeNum = [];
    let preSaveNum = '';
    let primeNumCount = 0
    
    for(let i = 0; i < nConvert.length; i++){
        if(nConvert[i] === '0'){
            if(preSaveNum !== ''){
                primeNum.push(preSaveNum)
                preSaveNum = ''
            }
            
        }else if(i === nConvert.length-1){
            preSaveNum = preSaveNum + nConvert[i]
            primeNum.push(preSaveNum)
        }else{
            preSaveNum = preSaveNum + nConvert[i]
        }
    }
    
    for(let i = 0; i < primeNum.length; i++){
        if(primeNum[i] <= '1'){
            continue;
        }
        if(primeNum[i] === '2'){
            primeNumCount++;
            continue;
        }
        
        let isPrime = true;
        for(let j = 2; j <= Math.floor(Math.sqrt(primeNum[i])); j++){
            if(primeNum[i]%j===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeNumCount++;
        }
    }
    
    return primeNumCount;
}