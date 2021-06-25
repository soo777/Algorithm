/*
  백준
  차이를 최대로

  1. 모든 수열의 경우 만들기
  2. 수열간의 절대 값 차이 합을 구하여 그중 MAX 값 구하기.
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let list = [];
let result = [];
let numbers = [];
let check = new Array(9).fill(false);

rl.on('line', function (line) {
  input.push(line);
})
  .on('close', async function () {
  
  let n = input[0];
  numbers = input[1].split(' ').sort((a,b) => a-b);

  re(0,n,0);  
  
  console.log(max_abs());
  process.exit();
});
 
// 모든 수열 구하기
const re = (cnt,n,start) => {
  if(cnt==n){    
    result.push(list.join(' '))
    return ;
  }
  for(let i=start;i<n;i++){
    if(!check[i]){      
      check[i] = true;
      list[cnt] = numbers[i];
      re(cnt+1,n,0);      
      check[i] = false;
    }
  }
}

/* 
  각 수열의 절대값의 합 구해서
  max 값과 비교. 
*/
const max_abs = () => {
  let max = 0;
  result.reduce((acc,cur)=>{
    let tmp = cur.split(' ');
    let sum = 0;
    for(let i=0;i<tmp.length-1;i++){
      sum += Math.abs(tmp[i]*1-tmp[i+1]*1);
    }
    max = Math.max(max, sum);
  },'')
  return max;
}