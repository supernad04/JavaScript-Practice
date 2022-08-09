function printPositiveIndex(array){
    var temp=[];
    for(let a=0; a<array.length; a++){
        if(array[a] > 0){
            temp.push(a);
        }
    }
    console.log(temp);
}

printPositiveIndex([1,3,-10]);
printPositiveIndex([10,5,-5,15]);
printPositiveIndex([10,5,5,15]);