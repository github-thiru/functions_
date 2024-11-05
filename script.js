// Remove duplicates in an array.
function removedup(arry){
    return[...new Set(arry)];
}
let arre=[1,2,4,3,1,2,3,4,5,1,]
let duplicate=removedup(arre)
document.write(duplicate)


// 2. Count the number of occurrences  elements in an array and display in an object.

function countoccu(array){
    const count={};
    array.forEach(item=>{
        count[item]=(count[item]||0)+1;
    })
    return count;
}
const arr=[1,2,3,4,1,1,1,2,3,]
const occr=countoccu(arr)
console.log(occr)

