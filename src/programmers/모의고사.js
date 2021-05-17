// 프로그래머스
// 모의고사

const solution = (answers) => {
  let answer = [];

  const a = [1,2,3,4,5];
  const b = [2,1,2,3,2,4,2,5];
  const c = [3,3,1,1,2,2,4,4,5,5];
  let cnt = [0,0,0];

  for(let i=0; i<=answers.length; i++){
    if(answers[i] === a[i % a.length]) cnt[0]++;
    if(answers[i] === b[i % b.length]) cnt[1]++;
    if(answers[i] === c[i % c.length]) cnt[2]++;
  }

  const max = Math.max(cnt[0], cnt[1], cnt[2]);

  for(let i=0; i<cnt.length; i++){
    if(max === cnt[i]) {
      answer.push(i+1);
    }
  }

  return answer;
}
