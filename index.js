const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")

function clickLike1(){
  let totalLikes = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

function clickLike2(){
  let totalLikes = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)
