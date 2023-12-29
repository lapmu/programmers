function solution(m, n, board) {
    
    const splitBoardEl = board.map(el=>el.split(''))
        
    
    while(1){
        
        const blockIdx = [];
        
        // 2*2가 같은 블록 찾아내기
        for(let i = 0; i < m-1; i++){
            
            for(let j = 0; j < n-1; j++){
                if(splitBoardEl[i][j] === 0) continue;
                
                if(splitBoardEl[i][j] === splitBoardEl[i][j+1] && splitBoardEl[i][j] === splitBoardEl[i+1][j] && splitBoardEl[i][j] === splitBoardEl[i+1][j+1]){
                    blockIdx.push([i, j])
                }
                
            }
            
        }
        
        // 찾은 블록이 없다면 break
        if(blockIdx.length === 0) break;

        // 찾은 블록이 있다면 없애기
        blockIdx.forEach(([x, y]) => {
            splitBoardEl[x][y] = 0;
            splitBoardEl[x][y+1] = 0;
            splitBoardEl[x+1][y] = 0;
            splitBoardEl[x+1][y+1] = 0;
        })
        
        // 아래부터 비어있는 블록을 찾아내어 비어있는 블록 위에 있는 블록으로 채워넣기
        for(let i = m-1; i > 0 ; i--){
            for(let j = 0; j < n; j++){
                if(splitBoardEl[i][j] === 0){
                    for(let k = i-1; k >= 0; k--){
                        if(splitBoardEl[k][j] !== 0){
                            splitBoardEl[i][j] = splitBoardEl[k][j];
                            splitBoardEl[k][j] = 0;
                            break;
                        }
                    }
                }
            }
        }   
    }

    // 위의 내용 반복
    
    return splitBoardEl.map(blocks=>blocks.filter(block=>block===0).length).reduce((acc,cur)=>acc+cur);
}