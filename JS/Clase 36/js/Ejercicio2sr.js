function perfectNumber(end){
    for (let i = 1; i <= end; i++){
        let div = 0;
        console.log(i);
        for (let j = 1 ; j < i; j++){
            if (i%j === 0){
                div = div + j;
            }
        }
        if (i === div){
            console.log(i);
        }
    }
} 
perfectNumber(1000000)
