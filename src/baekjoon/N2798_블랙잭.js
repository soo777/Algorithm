/* 
  백준
  블랙잭

  1. 모든 수열 구하기
  2. 수열의 합 구해서 m보다 작은지 기존 최대값 보다 큰지 판별
  3. 백트래킹으로 중복 인덱스는 피하기.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let arr = [];
let n, m;
let answer = 0;

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {

    n = input[0].split(' ')[0];
    m = input[0].split(' ')[1];
    arr = input[1].split(' ');

    solution();

    process.exit();
  });

const solution = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === i) {
        continue;
      }
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) {
          continue;
        }
        let temp = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);

        // console.log(`현재 인자 - ${i}, ${j}, ${k} / 합 : ${temp}`);

        if (temp <= m && temp > answer) {
          answer = temp;
        }
      }
    }
  }
  // console.log(`answer - ${answer}`);
  console.log(answer);
}