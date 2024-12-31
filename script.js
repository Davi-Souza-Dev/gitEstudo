const btnHide = document.getElementById("btnHide");
const cubo = document.getElementById("cubo");
btnHide.addEventListener("click",()=>{
    cubo.style.display = cubo.style.display == "none" ? "flex" : "none";
})

btnHide.addEventListener("mouseout",()=>{
    console.log("VIADO");
})

