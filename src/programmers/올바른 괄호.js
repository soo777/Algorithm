/* 프로그래머스
   올바른 괄호

   시작과 끝
   (,)의 개수 비교
   ( 과 ) 맞는지 비교

   https://programmers.co.kr/learn/courses/30/lessons/12909
*/

const solution = (s) => {
  let answer = true;

  if (s.charAt(0) === ')' || s.charAt(s.length - 1) === '(') answer = false;

  const a = s.split('').filter((s) => s === '(').length;
  const b = s.split('').filter((s) => s === ')').length;

  if (a !== b) answer = false;

  let openCnt = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') openCnt++;
    else openCnt--;

    if (openCnt < 0) answer = false;
  }

  return answer;
}