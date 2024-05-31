const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")

function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
btnLike1.addEventListener("click",hitLikes1)
function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes1.textContent = totalLikes2.toString()
}
btnLike2.addEventListener("click",hitLikes1)
function mistakes2() {
  let totalDisLikes1 = parsenInt(countDisLikes2.value) + 1
  countDisLikes1. textContent = toalDisLikes1. toString() 
}
btnDisLike1.addEventListener("click",misLikes1) 

function mistakes2() {
  let totalDisLikes2 = parsenInt(countedDisLikes2.value) + 1
  countDisLikes2. textContent = toalDisLikes2. toString() 
}
btnDisLike1.addEventListener("click",misLikes2) 
