let color = document.getElementById("color")
let empty = document.querySelectorAll(".empty")
let stop = document.getElementById('stop')

function reset(){
  empty.forEach((e)=>{
    e.style.backgroundColor = 'white'
  })
}
color.addEventListener("click",()=>{
  let value = color.getAttribute('data-value')
  empty.forEach((e)=>{
    e.addEventListener('click',()=>{
      e.style.backgroundColor = value
      stop.addEventListener('click',reset)
    })
  })
})
