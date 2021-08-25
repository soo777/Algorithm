/*
  백준
  1로 만들기
*/

// 백준 제출 용 시작
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const input = [];
// const DP = [];
// let num;

// rl.on('line', function (line) {
//   input.push(line);
// })
//   .on('close', function () {
//     num = input[0];

//     for (let i = 0; i < num + 1; i++) {
//       DP[i] = 0;
//     }

//     solution();

//     process.exit();
//   });
// 백준 제출 용 끝

// 디버깅 용 시작
let num = 10;
const DP = new Array(num + 1).fill(0);
// 디버깅 용 끝

const solution = () => {
  for (let i = 2; i <= num; i++) {
    DP[i] = DP[i - 1] + 1;

    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
  }
  console.log(DP[num]);
}

solution();