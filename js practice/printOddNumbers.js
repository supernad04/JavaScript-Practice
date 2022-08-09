function printOdd3to20(firstNum, lastNum){
    for(oddNum = firstNum; oddNum <= lastNum; oddNum++){
        if(oddNum % 2 !== 0){
            console.log(oddNum);
        }
    }
}
printOdd3to20(3,20);