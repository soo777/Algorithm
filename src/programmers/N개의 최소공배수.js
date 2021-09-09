/* 프로그래머스
   N개의 최소공배수

   2개씩 최소공배수를 구함
   최대 공배수 -> 두 수의 곱 / 최대공약수
   최대 공약수 -> 유클리드 호제법 (https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)

   https://programmers.co.kr/learn/courses/30/lessons/12953
*/

// 최대공약수 구하기
const gcd = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// 최대공배수 구하기
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const solution = (arr) => {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
};