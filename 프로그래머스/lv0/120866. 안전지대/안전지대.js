function solution(board) {
    // board[m][n]가 폭탄일 경우 [m-1][n-1], [m-1][n], [m-1][n+1], [m][n-1], [m][n+1], [m+1][n-1], [m+1][n], [m+1][n+1]이 위험지역
    // 안전지역만 카운팅해서 반환
    // var answer = 0;
    // for(let i = 0; i<board.length; i++) {
    //     for(let j = 0; j<board.length; j++) {
    //         if(board[i][j]===1) {
    //             for(let k = i-1; k<=i+1; k++) {
    //                 for(let l = j-1; l<=j+1; l++) {
    //                     if(k>=0&&l>=0&&k<=board.length&&l<=board.length){
    //                         if(board[k][l]===0) {
    //                             board[k][l] = 2;   
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // for(let i = 0; i<board.length; i++) {
    //     for(let j = 0; j<board.length; j++) {
    //         if(board[i][j]===0) {
    //             answer++;
    //         }
    //     }
    // }
    // return answer;
    
    // 나누어서 풀어보자!
    // 폭탄의 위치 찾기
    const arr = [];
    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board.length; j++) {
            if(board[i][j]===1) {
                arr.push([i, j]);
            }
        }
    }
    // 위치를 토대로 주변 위험지역 만들기
    for(let el of arr) {
        for(let i = 0; i<3; i++) {
            for(let j = 0; j<3; j++) {
                const x = el[0] + i - 1;
                const y = el[1] + j - 1;
                if(0<=x&&board.length>x&&0<=y&&board.length>y) {
                    board[x][y] = 1;
                }
            }
        }
    }
    // 위험지역 아닌 곳을 계산하여 반환
    let count = 0;
    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board.length; j++) {
            if(board[i][j]===0) {
                count++;
            }
        }
    }
    return count;
}