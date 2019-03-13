mergeSort =(arr)=>{
    if (arr.length < 2){
        return arr;
    }

    let mid = Math.floor((arr.length)/2),
        left = arr.slice(0,mid),
        right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))
}   

merge = (left, right) => {
    let result = [],
        l=0,
        r=0,
        lLen = left.length-1,
        rLen = right.length-1;
    while(l<=lLen && r<=rLen){
        if(left[l] <= right[r]) {
            result.push(left[l++])
        } else {
            result.push(right[r++])
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}
