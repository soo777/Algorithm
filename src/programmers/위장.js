// 프로그래머스
// 위장

const solution = (clothes) => {
    let hash = {};
    const type = [];

    for(let i=0; i<clothes.length; i++){
        const key = clothes[i][1];

        if(hash[key]){
            hash[key] +=1;
        } else {
            hash[key] = 1;
            type.push(key);
        }
    }

    let answer = 1;

    for(let i=0; i<type.length; i++){
        answer = answer * (hash[type[i]] + 1);
    }

    return answer - 1;
}