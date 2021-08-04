/*
  프로그래머스
  네트워크

  모든 노드를 방문할 로직
  방문체크 && 연결된 노드 체크 ? dfs
*/

const solution = (n, computers) => {
  let answer = 0;
  const visited = [];
  
  const dfs = (index) => {
      visited[index] = true;
      
      for(let i=0; i<n; i++){
          if(computers[index][i] === 1 && !visited[i]){
              dfs(i);
          }
      }
  }
  
  for(let i=0; i<n; i++){
      if(!visited[i]){
          dfs(i);
          answer += 1;
      }
  }
  
  return answer;
}