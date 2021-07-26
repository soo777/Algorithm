/*
  백준
  알파벳

  이전에 지나온 알파벳은 지나갈 수 없다.
  map 탐색하면서 visited(알파벳 방문 여부) 핀딘
  증복된 알파벳 만나면 이동거리 갱신하고 리턴
  다른루트로 탐색하기위해 visited 방문하지않은 상태로 초기화.
*/

// 백준 제출 용 시작
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
let n, m;
let map = [];
let visited = [];
let maxCnt = 0;

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
    let input1 = input[0].split('');
    m = input1[0];
    n = input1[2];

    // 2차배열 만들기_초기화 (map, visited(방문여부)) 
    for (let i = 0; i < n; i++) {
      map[i] = new Array(n);
    }

    for (let i = 1; i <= m; i++) {
      let str = input[i];
      for (let j = 0; j < n; j++) {
        map[i - 1][j] = str.charAt(j);
        visited[str.charAt(j)] = false;
      }
    }

    solution();
    process.exit();
  });
// 백준 제출 용 끝

// 디버깅 용 시작
// let m = 5; // 10
// let n = 5;
// let input = [
//   'IEFCJ',
//   'FHFKC',
//   'FFALF',
//   'HFGCF',
//   'HMCHH',
// ];

// const map = Array.from(Array(n), () => new Array(n));
// let visited = [];
// let maxCnt = 0;

// for (let i = 0; i < n; i++) {
//   let str = input[i];
//   for (let j = 0; j < n; j++) {
//     map[i][j] = str.charAt(j);
//   }
// }
// 디버깅 용 끝

const pos = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우

const dfs = (i, j, cnt) => {
  if (i >= 0 && i < m && j >= 0 && j < n) {
    if (visited[map[i][j]]) {
      maxCnt = Math.max(maxCnt, cnt);
      return;
    } else {
      visited[map[i][j]] = true;

      for (let k = 0; k < pos.length; k++) {
        let x = i + pos[k][0];
        let y = j + pos[k][1];

        if (x >= 0 && x < m && y >= 0 && y < n) {
          dfs(x, y, cnt + 1);
        }
      }
      visited[map[i][j]] = false;
    }
  }
}

const solution = () => {
  dfs(0, 0, 0);

  console.log(maxCnt);
}

// solution();
