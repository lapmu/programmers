function solution(keyinput, board) {
    var answer = [0, 0];
    for(let i = 0; i<keyinput.length; i++) {
        if(keyinput[i]==='up'&&(board[1]-1)/2>answer[1]&&-(board[1]-1)/2<=answer[1]) {
            answer[1]=answer[1]+1;
        }else if(keyinput[i]==='down'&&(board[1]-1)/2>=answer[1]&&-(board[1]-1)/2<answer[1]) {
            answer[1]=answer[1]-1;
        }else if(keyinput[i]==='left'&&(board[0]-1)/2>=answer[0]&&-(board[0]-1)/2<answer[0]) {
            answer[0]=answer[0]-1;
        }else if(keyinput[i]==='right'&&(board[0]-1)/2>answer[0]&&-(board[0]-1)/2<=answer[0]) {
            answer[0]=answer[0]+1;
        }
    }
    return answer;
}