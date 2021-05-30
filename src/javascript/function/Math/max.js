/* 
    Math.max()
    입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환.
*/

let value;

value = Math.max(3, 4.5)   // 4.5
console.log(value);

value = Math.max(-20, -10); // -10
console.log(value);

value = Math.max(-10, 20);  //  20
console.log(value);


value = Math.max(3, 5, 2);  //  5
console.log(value);

/*
    spread operator로 배열 중에 가장 큰 숫자 얻을 수 있다.
*/
const arr = [2, 3, 4];
value = Math.max(...arr);  //  4
console.log(value);

/*
    한 개 이상의 요소가 숫자로 변환되지 않는다면 NaN으로 리턴.
*/
const arr2 = [2, 3, 4];
value = Math.max(arr);  //  NaN
console.log(value);