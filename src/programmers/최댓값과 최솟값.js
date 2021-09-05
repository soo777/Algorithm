/* 프로그래머스
   최댓값과 최솟값

   배열로 만들어
   Int배열로 형변환후 오름차순 정렬

   https://programmers.co.kr/learn/courses/30/lessons/12939
*/

const solution = (s) => {
  const arr = s.split(" ").map((x) => {
    return parseInt(x, 10);
  });

  arr.sort((a, b) => {
    return a - b;
  })

  return arr[0] + " " + arr[arr.length - 1];
}
