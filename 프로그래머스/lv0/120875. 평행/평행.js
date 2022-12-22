function solution(dots) {
    // 한점의 좌표에서 한점의 좌표까지 증가량이 일정하다면 평행
    // dots의 요소를 전부 바교하며 증가량을 배열에 저장
    // 배열의 요소중 같은것이 있는지 있다면 1 없다면 0
    var answer = 0;
    const arr = [];
    for(let i = 0; i<dots.length; i++) {
        for(let j = i+1; j<dots.length; j++) {
            arr.push((dots[i][0]-dots[j][0])/(dots[i][1]-dots[j][1]))
        }
    }
    for(let i = 0; i<arr.length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            if(arr[i]===arr[j]) {
                answer = 1;
                break;
            }
        }
    }
    return answer;
}