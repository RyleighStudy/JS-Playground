/*function dataTypes(arr){
      let newArray = []
      for(let i = 0; i<arr.length; i++) {
        newArray[I] = dataTypes(arr[i])
      }
      return newArray
}
console.log(newArray)*/

/*let sumMinArrays = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]*/
function sumMinArrays(arr){
    let sumTotal = 0
    for (let i = 0; i < arr.length; i++){
        let y = arr[i][0]
        for(let x = 0; x < arr[i].length; x++){
            if(y > arr[i][x]){
                y = arr[i][x]
            }
        }
        sumTotal += y
    }
    return sumTotal
    console.log(sumTotal)
}