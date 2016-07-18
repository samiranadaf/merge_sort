/*function mergeSort(array) {
    if (array.length <= 1) {
        return array[0];
    }
    let middle = array.length / 2;
    let start = 0, end = array.length - 1;
    console.log(array.length);
    let left = array.split(start, middle);
    let right = array.split(middle, end);
    return mergeSort(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([4, 8, 1, 5, 0, 6, 2]));*/


function merge(left, right){
    var result = [];

    while (left.length > 0 && right.length > 0){
        if (left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left).concat(right);
}

function mergeSort(items){

    if (items.length == 1) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([1,4,2,3,7,5]));

