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
