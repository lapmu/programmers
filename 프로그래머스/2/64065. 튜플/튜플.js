function solution(s) {
    const resource = [];
    const obj = {};
    let num = '';
    // 문자열 배열로 변환
    const sArr = s.split('');
    // 배열을 순환하며 중괄호 제거
    const filter = sArr.filter((el)=>{
        return el!='{' && el!='}'
    });
    
    
    filter.forEach((el, idx)=>{
        // el 다음 요소가 ','이거나 undefined일 경우 resource 변수에 push 후 num 초기화
        if(filter[idx+1]===','|| !filter[idx+1]){
            num = num + el
            resource.push(Number(num))
            num = ''
        // 위 조건에 해당하지 않고 el이 ','가 아닐 경우 num에 el +
        }else if(el!=','){
            num = num + el
        }
    });
    
    // resource의 요소의 반복횟수의 객체 생성 key는 요소, value는 반복 횟수
    resource.forEach((el)=>{
        if(!obj[el]){
            obj[el] = 1;
        }else{
            obj[el] = obj[el] + 1;
        }
    });
    
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    
    // 횟수를 내림차순으로 정렬
    values.sort((a, b)=>b-a);
    
    // 정렬한 배열을 순회하는 반복문에서 obj에서 같은 값을 가진 key를 찾아 반환
    return values.map((el1)=>{
        const filtered = keys.filter((el2)=>{
            return el1===obj[el2]
        })
        return Number(filtered[0])
    });
};