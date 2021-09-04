/* 프로그래머스
   JadenCase 문자열 만들기

   전부 LowerCase()
   단어의 첫번째 인덱스만 UpperCase()

   https://programmers.co.kr/learn/courses/30/lessons/12951
*/
const solution = (s) => {
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
    arr[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
  }

  return arr.join(" ");
}
