function firstPlusLength(array){
    return array[0] + array.length;  
}

console.log(firstPlusLength([1, 2, 5]));
console.log(firstPlusLength([3, 0, 2, 5]));
console.log(firstPlusLength([-5, 0, 2, 5]));
console.log(firstPlusLength([1]));