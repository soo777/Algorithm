// 프로그래머스
// K번째수

const solution = (array, commands) => {
  let answer = [];

  for (let i=0; i<commands.length; i++){
    let tempArr = array.slice(commands[i][0] - 1, commands[i][1]);

    tempArr.sort(compareNumbers);

    answer.push(tempArr[commands[i][2]-1])
  }

  return answer;
}

const compareNumbers = (a, b) => {
  return a - b;
}
