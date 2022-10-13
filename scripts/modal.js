/* Desenvolva sua lógica aqui */
const controlModal = document.querySelector(".header__btn")

controlModal.addEventListener("click", ()=>{
        controlModal.getAttribute("data-control-modal")
        document.getElementById("modal-registro").classList.toggle("show-modal")
    })

const closeModal = document.querySelector(".modal-close")

closeModal.addEventListener("click", ()=>{
    closeModal.getAttribute("data-control-modal")
    document.getElementById("modal-registro").classList.toggle("show-modal")
})

const closeModal2 = document.querySelector(".insert")

closeModal2.addEventListener("click", ()=>{
    closeModal.getAttribute("data-control-modal")
    document.getElementById("modal-registro").classList.toggle("show-modal")
})

const closeModal3 = document.querySelector(".cancel")

closeModal3.addEventListener("click", ()=>{
    closeModal.getAttribute("data-control-modal")
    document.getElementById("modal-registro").classList.toggle("show-modal")
})