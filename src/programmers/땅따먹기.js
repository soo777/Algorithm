/* 프로그래머스
   땅따먹기

   기본적인 DP 문제
   점화식 - 이전 행의 원소중 최대값(같은 열 제외) + 현재 열 원소

   https://programmers.co.kr/learn/courses/30/lessons/12913
*/


const solution = (land) => {
  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  const answer = land[land.length - 1];

  return Math.max(...answer);
}
