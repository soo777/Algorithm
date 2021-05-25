// 프로그래머스
// 기능개발

const solution = (progresses, speeds) => {
  let tempArr = [];
  let answer = [0];

  for(let i = 0; i<progresses.length; i++){
    let remain = 100 - progresses[i];
    tempArr.push(Math.ceil(remain/speeds[i]));
  }

  let max = tempArr[0];

  for(let i=0, j=0; i<tempArr.length; i++){
    if(tempArr[i] <= max){
      answer[j] += 1;
    } else {
      max = tempArr[i];
      answer[++j] = 1;
    }
  }
  
  return answer;
}