console.log("this is module")
function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum+=element;
        
    });
    return sum/arr.length
}
// module.exports = {
//     avg:average,
//     name:"sachin",
//     repo:"github"

// }
module.exports.name = "sachin"
