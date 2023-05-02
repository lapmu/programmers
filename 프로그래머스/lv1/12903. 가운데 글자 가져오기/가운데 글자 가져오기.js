function solution(s) {
    //s의 길이가 짝수인 경우 s/2-1부터 s/2까지 잘라서 반환
    //s의 길이가 홀수인 경우 s/2를 내림해 잘라서 반환

    return !(s.length%2)?s.slice(s.length/2-1, s.length/2+1):s.slice(Math.floor(s.length/2),Math.floor(s.length/2)+1);
}