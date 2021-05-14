// 프로그래머스
// 완주하지 못한 선수

const solution = (participant, completion) => {
  let answer = '';

  let obj = {};

  participant.forEach((p) => {
    if(obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  });

  completion.forEach((c) => {
    if(obj[c]){
      obj[c] -= 1;
    }
  });

  participant.forEach((p) => {
    if(obj[p] > 0) {
      answer = p;
    }
  });

  return answer;
}
