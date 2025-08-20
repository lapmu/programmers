function solution(num_list) {
    const last = num_list[num_list.length-1];
    const atLast = num_list[num_list.length-2];
    const answer = [...num_list];
    if(last>atLast){
        answer.push(last - atLast);
    }else{
        answer.push(last*2);
    }
    return answer;
    }