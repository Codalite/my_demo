
// let,var, const
const num=3

var num2;
num2='3.4'
const list=[1,2,3,4,8,5]
// list.push([12,5,6,8,9,])
// console.log(list.toLocaleString().replaceAll(','," ").split(' ').length)
// console.log(list)
// for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//    console.log(index,element);
   
// }
// console.log("using for in loop");

// for(let i in list){
//     if(i){
//         console.log("is an array")
        
//     }
//     console.log(list[i]);
    
// }


// let list2=Array();
// list2.push(...list)

// list2.forEach((value,index)=>{
//     console.log(value,index);
    
// })
// let str="hello there".split(' ')
// str.forEach(function(v,i){
// console.log(v,i);

// })
// console.log(list2);


function nameUpper(name){
    console.log(name);
    
   return name.toUpperCase()
    
}
function nameLength(name){
    let upName=nameUpper(name)
    return [upName.length,upName]
}

function main(name="franck",et){
    console.log(et);
    
let result = nameLength(name)


return result
}
console.log(...main(name="luis",6))

// let func=function(){
//     console.log("anonymous function");
    
// }
// let arrowFunc=()=>{
//     console.log("Arrow function");
    
// }

// arrowFunc()
// func()
// jackUpper(name="jack")
// jackUpper(name="wilson")
// jackUpper(name="smith")