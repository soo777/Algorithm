/*
  백준
  좋은 수열 (백트래킹)

  1. 수열의 시작은 1
  2. 좋은 수열 판단 (3 조건으로 for문 탐색하여 같은 문자열 유무 체크)
  3. 가능한 숫자 -> 지금까지 구한 수열의 길이 + 다음에 들어갈 문자 까지의 길이의 절반 -> length/2
  4. 같은 문자열이 나오면 수열 사용 불가능 
  5. 같은 문자열이 발견되지 않으면 -> 좋은 수열 -> 다음 재귀 호출
  6. n 자리 수열을 구하는 경우 종료 (가장 먼저 구한 수열이므로 -> 가장 작은 수 -> 다음 수열 구할 필요 없음)
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let check = false;

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', function () {
    n = input[0];

    dfs(1, "1");

    process.exit();
  });


const dfs = (len, sequence) => {
  if (check) {
    return;
  }

  if (n === len) {
    console.log(sequence);
    check = true;
    return;
  }

  for (let i = 1; i <= 3; i++) {
    sequence = sequence + i;

  }

  return;
}
