/* 프로그래머스
   숫자의 표현

   효율성을위해 반복문은 n/2까지만 하고 
   자기자신은 포함되므로 마지막에 +1 헤준다

   https://programmers.co.kr/learn/courses/30/lessons/12924
*/

const solution = (n) => {
  let answer = 0;

  for (let i = 1; i < n / 2; i++) {
    let sum = 0;
    for (let j = i; sum < n; j++) {
      sum += j;
    }
    if (sum === n) answer++;
  }

  return answer + 1;
}
