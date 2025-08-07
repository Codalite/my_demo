
const bodyEl = document.getElementById('body')

const div = document.createElement('div')
let anchor = document.createElement("a")

bodyEl.append(div)

const html = document.getElementsByTagName('html')[0]

// console.log(html);

div.innerText = "this is the div"

anchor.href = "/index.html"

anchor.innerHTML = "<strong style='color:green'>Hello from innerHTML in anchor</strong>"

div.append(anchor)
// console.log(document);


// let btntheme = document.getElementById('theme')
// btntheme.addEventListener("click", function (e) {
//     window.syste
//      html.classList.toggle('theme-dark') })


let js_obj={name:"jackson"}

let es={
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "skills": ["JavaScript", "Python", "HTML"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "zip": "10001"
  }
}
const objs=[
  {
    "id": 1,
    "product": "Laptop",
    "price": 1200.99,
    "inStock": true
  },
  {
    "id": 2,
    "product": "Smartphone",
    "price": 799.49,
    "inStock": false
  }
]

let obj={
  "company": "Tech Solutions",
  "employees": [
    {
      "name": "Alice",
      "role": "Developer",
      "languages": ["Java", "C++"]
    },
    {
      "name": "Bob",
      "role": "Designer",
      "tools": ["Photoshop", "Illustrator"]
    }
  ]
}


const list=document.querySelectorAll("li")
// let list_children=list.children

// for( index in list_children){
//     const li=list_children[index].firstChild.style="color:red;background:pink"
//     console.log(li);
    

// }
let count=1;
// list.forEach(function(li){
//     if (count%2===0){
//       li.style.color="red"
//       li.firstChild.innerText =li.firstChild.innerText+" "+" from js "
//     }else{
//       li.style.color="skyblue"
//     }
//     console.log(count);
    
//     count++
    
    
// })

// console.log(list);
let menu=document.querySelector(".navbar")
document.querySelector('.menu-btn').addEventListener('click',e=>{
 menu.classList.toggle('show')
})