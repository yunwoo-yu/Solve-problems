function solution(my_string, num1, num2) {
    return [...my_string].map((el,idx,arr) => {
        if(idx === num1) {
            return arr[num2];
        }
        
        if(idx === num2) {
            return arr[num1];
        }
        
        return el;
    }).join('')
}