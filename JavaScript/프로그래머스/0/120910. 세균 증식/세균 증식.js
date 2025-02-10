function solution(n, t) {
    let result = n;
    
    for (let i=0; t > i; i++) {
        result = result * 2;    
    }
    
    return result;
}