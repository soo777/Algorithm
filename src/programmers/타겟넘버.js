/*
  프로그래머스
  타겟넘버

  다음 인덱스가 +, - 2가지의 경우로 dfs
*/


const solution = (numbers, target) => {
  let answer = 0;
  
  const dfs = (index, sum) => {
      if(index === numbers.length) {
          if (sum === target) {
              answer++;
           }
          return;
      }
      
      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
  }
  
  dfs(0, 0);
  
  return answer;
}