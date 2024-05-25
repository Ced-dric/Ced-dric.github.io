const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLike1 = document.getElemntById("countLike1")
const countLike2 = document.getElemntById("countLike2")

function hitlike1() {
  let totalLike1 = parseInt(countLike1.value) +1
  countLike1.textContent = totalLike1.toString()
}
btnLike1.addEventListener("click",hitLike1)
