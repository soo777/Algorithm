const solution = (citations) => {
    let answer = 0;

    citations.sort((a,b)=>{
        return b-a;
    });

    for(let i=0; i<citations.length; i++){
        if(i < citations[i]) {
            answer++;
        }
    }

    return answer;
}


// 참조 https://www.ibric.org/myboard/read.php?Board=news&id=270333