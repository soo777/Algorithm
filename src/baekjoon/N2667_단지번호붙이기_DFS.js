/*
  백준
  단지번호 붙이기 (DFS)
  
  1. 2차배열 만들기 (map, 방문여부)
  2. 이중 for문을 돌면서 단지를 찾는다.
  3. 단지를 만나면(=1) 단지들이 이어져있는지 찾아가면서 구현 (dfs 시작)
  4. 단지를 만났을 때 조건
    4-1. 방문을 하지 않은 곳인지(visited가 false면 실행)
    4-2. 단지가 연결되어 있는지
    4-3. 범위를 만족하는지(상하좌우) (n,n) 범위를 벗어나면 안됌 -> x,y축 검증
  5. 큰 dfs가 다 돌면 count를 result 배열에 넣어주고 단지의 수와 오름차순 정렬
*/

// 백준 제출 용 시작
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
let n;
let map = [];
let visited = [];

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
    n = input[0];

    // 2차배열 만들기_초기화 (map, visited(방문여부)) 
    for (let i = 0; i < n; i++) {
      map[i] = new Array(n);
    }

    for (let i = 0; i < n; i++) {
      visited[i] = new Array(n).fill(false);
    }

    for (let i = 1; i <= n; i++) {
      let str = input[i];
      for (let j = 0; j < n; j++) {
        map[i - 1][j] = Number(str.charAt(j));
      }
    }

    solution();
    process.exit();
  });
// 백준 제출 용 끝

// 디버깅 용 시작
// let n = 7;
// let input = [
//   '0110100',
//   '0110101',
//   '1110101',
//   '0000111',
//   '0100000',
//   '0111110',
//   '0111000'
// ];

// const map = Array.from(Array(n), () => new Array(n));
// let visited = Array.from(Array(7), () => Array(7).fill(false));

// for (let i = 0; i < n; i++) {
//   let str = input[i];
//   for (let j = 0; j < n; j++) {
//     map[i][j] = Number(str.charAt(j));
//   }
// }
// 디버깅 용 끝

const pos = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let result = [];
let cnt = 0;

const dfs = (i, j) => {
  cnt++; // 단지 개수 하나씩 증가 
  visited[i][j] = true;
  for (let q = 0; q < pos.length; q++) {
    let ni = i + pos[q][0];
    let nj = j + pos[q][1];

    // 1. 배열의 조건을 만족하는지
    // 2. 단지가 연결되어있는지
    // 3. 방문을 하지않은 곳인지 
    if (ni >= 0 && ni < n && nj >= 0 && nj < n && Number(map[ni][nj]) === 1 && !visited[ni][nj]) {
      dfs(ni, nj);
    }
  }
}

const solution = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 단지가 있는곳인지, 방문하지않은곳인지
      if (map[i][j] === 1 && !visited[i][j]) {
        cnt = 0;
        dfs(i, j);
        result.push(cnt);
      }
    }
  }

  console.log(result.length);
  result.sort((a, b) => a - b);
  console.log(result.join('\n'));

}

// solution();