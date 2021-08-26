/* 프로그래머스
   124 나라의 숫자

   나머지가 0=4, 1=2, 2=2
   몫이 3의배수일때 n-1

   https://programmers.co.kr/learn/courses/30/lessons/12899
*/
const solution = (n) => {
  let answer = '';

  while (n > 0) {
    if (n % 3 == 0) {
      answer = '4' + answer;
      n = n / 3 - 1;
    } else if (n % 3 == 1) {
      answer = '1' + answer;
      n = Math.floor(n / 3);
    } else {
      answer = '2' + answer;
      n = Math.floor(n / 3);
    }
  }

  return answer;
}
