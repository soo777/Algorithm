/*
  백준
  미로탈출
*/

// 백준 제출 용 시작
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const input = [];
// let n, m;
// let map = [];
// let visited = [];

// rl.on('line', function (line) {
//   input.push(line);
// })
//   .on('close', function () {
//     let input1 = input[0].split('');
//     n = input1[0];
//     m = input1[2];

//     // 2차배열 만들기_초기화 (map, visited(방문여부)) 
//     for (let i = 0; i < n; i++) {
//       map[i] = new Array(n);
//       visited[i] = new Array(n);
//     }

//     for (let i = 1; i <= n; i++) {
//       let str = input[i];

//       for (let j = 0; j < m; j++) {
//         map[i - 1][j] = str.charAt(j);
//         visited[i - 1][j] = false;
//       }
//     }

//     solution();
//     process.exit();
//   });
// 백준 제출 용 끝

// 디버깅 용 시작
let n = 4;
let m = 6; // 9
// let input = [
//   '110110',
//   '110110',
//   '111111',
//   '111101',
// ];
let input = [
  '101111',
  '101010',
  '101011',
  '111011',
];

const map = Array.from(Array(n), () => new Array(m));
let visited = [];

for (let i = 0; i < n; i++) {
  let str = input[i];
  visited[i] = new Array(m).fill(false);
  for (let j = 0; j < m; j++) {
    map[i][j] = Number(str.charAt(j));
  }
}
// 디버깅 용 끝

const pos = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우

const bfs = (x, y) => {
  let q = []

  q.push({ x: x, y: y });

  visited[x][y] = true;

  while (q.length) {
    const { x, y } = q.shift();

    for (let i = 0; i < pos.length; i++) {
      let nextX = x + pos[i][0];
      let nextY = y + pos[i][1];
      if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
        if (!visited[nextX][nextY] && map[nextX][nextY] === 1) {
          visited[nextX][nextY] = visited[x][y] + 1;
          q.push({ x: nextX, y: nextY });
        }
      }
    }
  }

}

const solution = () => {
  bfs(0, 0);
  console.log(visited[n - 1][m - 1]);
}

solution();