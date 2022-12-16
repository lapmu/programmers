function solution(polynomial) {
    // 공백을 기준으로 배열로 자름
    // x가 있는 항과 없는 항으로 나누고 각각 더함
    // x가 있는 항과 없는 항붙여서 반환
    var answer = '';
    let x = 0;
    let num = 0;
    let arr = polynomial.split(' ');
    for(let i = 0; i<arr.length; i++) {
        if(arr[i][arr[i].length-1]==='x') {
            if (arr[i]==='x'){
            x++;
            }else{
                for(let j = 0; j<arr[i].length-1; j++) {
                    answer = answer + arr[i][j];
                }
                x = x + Number(answer);
                answer = '';
            }
        }else if(arr[i]!=='+'){
            num = num + Number(arr[i]);
        }
        
    }
    if(x===0){
            if(num===0){
                return 0;
            }else{
                return String(num)
            }
        }else if(x===1){
            if(num===0){
                return `x`
            }else{
                return `x + ${num}`
            }
        }else{
            if(num===0){
                return `${x}x`
            }else{
                return `${x}x + ${num}`
            }
        }
    return answer;
}