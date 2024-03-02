let color = document.querySelectorAll('.color')
let empty = document.querySelectorAll('.empty')
let reset = document.getElementById('reset')

color.forEach((div)=>{
  div.addEventListener('click',()=>{
let value = div.getAttribute('data-value')

empty.forEach((div)=>{
  div.addEventListener('click',()=>{
  div.style.backgroundColor = value
  reset.addEventListener('click',()=>{
    div.style.backgroundColor = 'white'
  })
})
}
)})
})


