/* 
    arr.sort([compareFunction])
    배열을 정렬하기 위해 사용.
    compareFunction을 생략하면 각 요소의 문자열 변환에 따라 각 문자의 유니코드 포인트 값에 따라 정렬.
*/

const arr1 = [4,1,3,10];
arr1.sort()
console.log(arr1);              // [1,10,3,4]

/*
    compareFunction(a, b)
    a > b 이면 1,
    a === b 이면 0,
    a < b 이면 -1,
*/

// 오름차순 정렬
const arr2 = [4,1,3,10];
arr2.sort((a,b)=>{return a-b});
console.log(arr2);              // [1,3,4,10]


// 내림차순 정렬
const arr3 = [4,1,3,10];
arr3.sort((a,b)=>{return b-a});
console.log(arr3);              // [10,4,3,1]

/*
    객체 정렬
    해당 속성 중 하나의 값을 기준으로 정렬.
*/

const items = [
    { name: 'Edward', value: 21 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Zeros', value: 37 }
  ];

// value를 기준으로 오름차순 정렬
/*
  [
    { name: 'The', value: -12 },
    { name: 'Edward', value: 21 },
    { name: 'Zeros', value: 37 },
    { name: 'And', value: 45 }
  ]
 */
items.sort((a,b)=> {
    if(a.value > b.value){
        return 1;
    }
    if(a.value < b.value){
        return -1;
    }
    return 0;
});
console.log(items);         


// name을 기준으로 오름차순 정렬
/*
  [
    { name: 'And', value: 45 },
    { name: 'Edward', value: 21 },
    { name: 'The', value: -12 },
    { name: 'Zeros', value: 37 }
  ]
 */
items.sort((a,b)=> {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA > nameB){
        return 1;
    }
    if(nameA < nameB){
        return -1;
    }
    return 0;
});
console.log(items);