/*
  프로그래머스
  상호평가
  https://programmers.co.kr/learn/courses/30/lessons/83201

  1. 사람(열)별 배열 구하기
  2. 정렬
  3. 가장 작은수, 큰수 여부 확인
  3-1, 중복 여부 확인 (유일하면 배열에서 제거)
  4. 학점 구하기
*/

const solution = (scores) => {
  let answer = '';

  for (let i = 0; i < scores.length; i++) {
    let arr = [];
    let tmp;

    for (let j = 0; j < scores.length; j++) {
      if (i === j) {
        tmp = scores[j][i];
      }
      arr.push(scores[j][i])
    }

    arr.sort((a, b) => { return a - b });

    if (tmp === arr[0] || tmp === arr[scores.length - 1]) {
      let cnt = 0;
      arr.forEach((value) => {
        if (tmp === value) cnt++;
      })
      if (cnt === 1) {
        const index = arr.indexOf(tmp)
        arr.splice(index, 1);
      }
    }
    const grade = calGrade(arr);
    answer += grade;
  }
  return answer;
}

const calGrade = (arr) => {
  let sum = 0;
  arr.forEach((value) => { sum += value; });

  const average = sum / arr.length;

  if (average >= 90) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 50 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}