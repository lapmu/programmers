function solution(num_list) {
    const count = num_list.reduce((acc, el)=>{
        return [acc[0]+el,acc[1]*el]
    },[0,1])
    
    if(count[0]*count[0] > count[1]){
        return 1
    }else{
        return 0
    }
}