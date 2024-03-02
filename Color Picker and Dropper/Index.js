// let color = document.getElementById("color")
// let empty = document.querySelectorAll(".empty")
// let stop = document.getElementById('stop')

// function reset(){
//   empty.forEach((e)=>{
//     e.style.backgroundColor = 'white'
//   })
// }
// color.addEventListener("click",()=>{
//   let value = color.getAttribute('data-value')
//   empty.forEach((e)=>{
//     e.addEventListener('click',()=>{
//       e.style.backgroundColor = value
//       stop.addEventListener('click',reset)
//     })
//   })
// })




let color = document.querySelectorAll('.color')
let empty = document.querySelectorAll('.empty')

color.forEach((div)=>{
  div.addEventListener('click',()=>{
let value = div.getAttribute('data-value')

empty.forEach((div)=>{
  div.addEventListener('click',()=>{
  div.style.backgroundColor = value
})
}
)})
})


