/* 프로그래머스
   다음 큰 숫자

   2진수 변환 .toString(2)
   1의 갯수 구하기
   n+1 하면서 1 갯수 비교

   https://programmers.co.kr/learn/courses/30/lessons/12911
*/
const solution = (n) => {
  let nc = Number(n).toString(2);
  let ncCount = nc.match(/1/g).length;
  while (true) {
    n += 1;
    let next = Number(n).toString(2);
    let nextCount = next.match(/1/g).length;
    if (ncCount == nextCount) {
      break;
    }
  }
  return n;
}
