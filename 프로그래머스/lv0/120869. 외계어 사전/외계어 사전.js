function solution(spell, dic) {
    // dic를 순회하는 반복문 작성
    // 반복문에서 spell을 순회하며 dic요소에 spell의 요소가 있을 경우 제거
    // dic요소가 ''밖에 안 남았을 경우 1을 반환
    var answer = 2;
    
    for(let i = 0; i< dic.length; i++) {
        let trans = dic[i];
        for(let j = 0; j< spell.length; j++){
            if(trans.includes(spell[j])){
                trans = trans.replace(spell[j], '')                
            }else{
                trans = trans + ' ';
            }
        }
        if(trans===''){
            answer = 1;
            break;
        }
    }
    return answer;
}