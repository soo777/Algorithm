/* 프로그래머스
   피보나치 수

   기본적인 DP 문제
   점화식 : f(n) = f(n-1) + f(n-2);
   (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C
   int 범위 내에 항상 값이 존재하도록 보장

   https://programmers.co.kr/learn/courses/30/lessons/12945
*/


const solution = (n) => {
  let arr = [];
  
  arr[0] = 0;
  arr[1] = 1;
  
  for(let i=2; i<=n; i++){
      arr[i] = arr[i-2] % 1234567 + arr[i-1] % 1234567;
  }
  
  return arr[n] % 1234567;
}