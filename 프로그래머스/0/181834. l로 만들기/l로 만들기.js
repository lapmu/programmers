function solution(myString) {
    return myString.split('').map((el)=>{
        const arr = [el, 'l'].sort();
        if(arr[0]===el){
            return 'l';
        }else{
            return el;
        }
    }).join('');
}