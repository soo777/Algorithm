// 프로그래머스
// 가장 큰 수

const solution = (numbers) => {
  let answer = '';

  answer = numbers.map((num) => String(num)).sort((a,b) => (b+a) - (a+b)).join('');

  return answer[0] === '0' ? '0' : answer;
}
