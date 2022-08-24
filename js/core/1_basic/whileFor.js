// 레이블을 사용한 반복문

outer : for (let i = 0; i < 3 ; i++) {

    for (let j = 0; j < 3; j++) {
        console.log(`${i} , ${j}`);

        if(j === 2) break outer;
    }
}

// 0 , 0
// 0 , 1
// 0 , 2