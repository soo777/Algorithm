// 프로그래머스
// 프린터

const solution = (priorities, location) => {
    let answer = 0;
    let result = location;
    
    while(priorities.length > 0) {
        if(priorities.some(tmp => tmp > priorities[0])) {
            priorities.push(priorities[0]);
            priorities.shift();			  
            
            if(result === 0) {
                result += priorities.length - 1;
            } else {
                result -= 1;
            }
        } else {
            answer += 1;
            
            if(result === 0) {
                break;
            } else {
                result -= 1;
            }
            
            priorities.shift();
        }
    }
    return answer;
}