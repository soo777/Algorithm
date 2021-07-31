/*
    수열 만들기 샘플
*/

let list = [];
let result = [];
let numbers = [1,2,3,4];
let check = new Array(4).fill(false);

const re = (cnt, n, start) => {
    if (cnt == n) {
        result.push(list.join(' '))
        return;
    }
    for (let i = start; i < n; i++) {
        if (!check[i]) {
            check[i] = true;
            list[cnt] = numbers[i];
            re(cnt + 1, n, 0);
            check[i] = false;
        }
    }
}

re(0, numbers.length, 0);

console.log(result);