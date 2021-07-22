/*
  백준
  적록색약

  색약인경우, 색약이 아닌경우 
  2가지를 따로 만들어 해결
*/

// 백준 제출 용 시작
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
let n;
let map =[];
let patientMap = [];
let visited = [];
let patientVisited = [];

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
    n = input[0];

    // 2차배열 만들기_초기화 (map, visited(방문여부)) 
    for (let i = 0; i < n; i++) {
      map[i] = new Array(n);
      patientMap[i] = new Array(n);
    }

    for (let i = 0; i < n; i++) {
      visited[i] = new Array(n).fill(false);
      patientVisited[i] = new Array(n).fill(false);
    }

    for (let i = 1; i <= n; i++) {
      let str = input[i];
      for (let j = 0; j < n; j++) {
        map[i - 1][j] = str.charAt(j);
        patientMap[i - 1][j] = str.charAt(j);
      }
    }

    solution();
    process.exit();
  });
// 백준 제출 용 끝

// 디버깅 용 시작
// let n = 5;
// let input = [
//   'RRRBB',
//   'GGBBB',
//   'BBBRR',
//   'BBRRR',
//   'RRRRR',
// ];

// const map = Array.from(Array(n), () => new Array(n));
// const patientMap = Array.from(Array(n), () => new Array(n));
// let visited = Array.from(Array(n), () => Array(n).fill(false));
// let patientVisited = Array.from(Array(n), () => Array(n).fill(false));

// for (let i = 0; i < n; i++) {
//   let str = input[i];
//   for (let j = 0; j < n; j++) {
//     map[i][j] = str.charAt(j);
//     patientMap[i][j] = str.charAt(j);
//   }
// }
// 디버깅 용 끝

const pos = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let result = [];
let patientResult = [];
let cnt = 0;
let patientCnt = 0;

const dfs = (i, j, color) => {
  visited[i][j] = true;
  for (let q = 0; q < pos.length; q++) {
    let ni = i + pos[q][0];
    let nj = j + pos[q][1];

    if (ni >= 0 && ni < n && nj >= 0 && nj < n && !visited[ni][nj]) {
      if (map[ni][nj] === color) dfs(ni, nj, color);
    }
  }
}

const patientDfs = (i, j, color) => {
  patientVisited[i][j] = true;
  for (let q = 0; q < pos.length; q++) {
    let ni = i + pos[q][0];
    let nj = j + pos[q][1];

    if (ni >= 0 && ni < n && nj >= 0 && nj < n && !patientVisited[ni][nj]) {
      if (color === 'R' || color === 'G') {
        if (patientMap[ni][nj] === 'R' || patientMap[ni][nj] === 'G') patientDfs(ni, nj, color);
      } else {
        if (patientMap[ni][nj] === color) patientDfs(ni, nj, color);
      }
    }
  }
}

const solution = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        dfs(i, j, map[i][j]);
        result.push(cnt);
        cnt++;
      }
      if (!patientVisited[i][j]) {
        patientDfs(i, j, map[i][j]);
        patientResult.push(patientCnt);
        patientCnt++;
      }
    }
  }

  console.log(cnt + " " + patientCnt);
}

// solution();
