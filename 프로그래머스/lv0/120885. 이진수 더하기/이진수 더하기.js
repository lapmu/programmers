function solution(bin1, bin2) {
    // 두 매개변수의 길이 차이를 잘라낸다
    // 같은자리끼리 뒤에서부터 더하기 
    // 2가 될 경우 다음 자리에 1더해주기
    // 잘랐던거 다시 붙여서 반환
    var answer = '';
    let save;
    let up = 0;
    if(bin1.length>bin2.length) {
        save = bin1.slice(0, bin1.length-bin2.length)
        bin1 = bin1.slice(bin1.length-bin2.length)
    }else if(bin1.length<bin2.length){
        save = bin2.slice(0, bin2.length-bin1.length)
        bin2 = bin2.slice(bin2.length-bin1.length)
    }
    
    for(let i = bin1.length-1; i>=0; i--) {
        if(Number(bin1[i])+Number(bin2[i])+up===2){
            up = 1
            answer = 0 + answer;  
        }else if(Number(bin1[i])+Number(bin2[i])+up===3) {
            up = 1
            answer = 1 + answer;
        }else if(Number(bin1[i])+Number(bin2[i])+up===1) {
            up = 0
            answer = 1 + answer;
        }else if(Number(bin1[i])+Number(bin2[i])+up===0&&save||Number(bin1[i])+Number(bin2[i])+up===0&&i!==0||Number(bin1[i])+Number(bin2[i])+up===0&&bin1.length===1){
            up = 0
            answer = 0 + answer;
        }
    }
    if(save&&up===1){
        for(let i = save.length-1; i>=0; i--){
            if(Number(save[i])+up===2) {
                up = 1
                answer = 0 + answer; 
            }else if(Number(save[i])+up===1) {
                up = 0
                answer = 1 + answer; 
            }
        }
    }else if(save&&up===0) {
        answer = save + answer
    }
    if(up===1) {
            answer = up + answer;
    }
        

    return answer;
}