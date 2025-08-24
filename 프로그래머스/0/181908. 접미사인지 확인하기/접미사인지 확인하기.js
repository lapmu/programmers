function solution(my_string, is_suffix) {
    const myLength = my_string.length;
    const isLength = is_suffix.length;
    
    if(myLength<isLength){
        return 0;
    }
    
   if(my_string.slice(-isLength)===is_suffix){
       return 1;
   }else{
       return 0;
   }
    
}