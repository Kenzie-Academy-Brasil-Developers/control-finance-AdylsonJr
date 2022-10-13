/* Desenvolva sua lógica aqui */
const valueList = document.querySelector(".listValues__container")

function createCardValues(item){

    const cardValue = document.createElement("li")
    cardValue.classList.add("listValues__value__container")
    const value = document.createElement("p")
    const divButtons = document.createElement("div")
    const typeValue = document.createElement("button")
    typeValue.classList.add("btn")
    typeValue.classList.add("btnGreylow")
    const btnClear = document.createElement("button")
    btnClear.classList.add("btn")
    btnClear.classList.add("btnTrash")
    const trash = document.createElement("img")

    valueList.appendChild(cardValue)
    cardValue.appendChild(value)
    cardValue.appendChild(divButtons)
    divButtons.appendChild(typeValue)
    divButtons.appendChild(btnClear)
    btnClear.appendChild(trash)

    value.innerText = `R$ ${parseFloat(item.value).toFixed(2)}`
    if(item.categoryID == 1){
        typeValue.innerText = valuesCategory[0]
    }if(item.categoryID == 2){
        typeValue.innerText = valuesCategory[1]
    }
    btnClear.id = item.id
    trash.src = "../../assets/trash (1).png"
    trash.id = item.id

}

function handleValues(list){
    valueList.innerHTML = ""
    // for (let i = 0; i < list.length; i++){
    //     let item = list[i]
    //     createCardValues(item)
    // }
    list.forEach(element => createCardValues(element));

    const totalValues = document.querySelector(".summary__sum__value")
    totalValues.innerText = `R$ ${list.reduce((preVal, elem) => parseFloat(preVal) + parseFloat(elem.value), 0).toFixed(2)}`
}

handleValues(insertedValues)

const value = document.querySelector(".modal__input > input")

const btnEntrace = document.querySelector(".entrance")

const btnExit = document.querySelector(".exit")

const insert = document.querySelector(".insert")

let inputValue = value.value

let categoryid = 0

btnEntrace.addEventListener("click", ()=>{
    categoryid = 1
    inputValue = parseFloat(value.value).toFixed(2)
})

btnExit.addEventListener("click", ()=>{
    categoryid = 2
    inputValue = parseFloat(value.value).toFixed(2)
})

let id = insertedValues.length + 1

insert.addEventListener("click", ()=>{
    insertedValues.push({id:id, value:inputValue, categoryID:categoryid})
    handleValues(insertedValues)
})

valueList.addEventListener("click", interceptValue)

function interceptValue(event){
    let btnClear = event.target
    let idValue = btnClear.id
    let value = insertedValues.find((value)=>{
        if(value.id == idValue){
            return value
        }
    })

    removeValue(value)
}

function removeValue(value){
    if(value !== undefined){
        console.log(insertedValues.indexOf(value))
        let index = insertedValues.indexOf(value)
        insertedValues.splice(index, 1)
        
        handleValues(insertedValues)
    }
}

const btnListAllValues = document.querySelector(".summary__button__all")

btnListAllValues.addEventListener("click", ()=>{
    handleValues(insertedValues)
})

const btnEntrances = document.querySelector(".summary__button__entrances")

btnEntrances.addEventListener("click", ()=>{
    let entrancesValuesList = []
    // for(let i = 0; i<insertedValues.length; i++){
    //     if(insertedValues[i].categoryID == 1){
    //         entrancesValuesList.push(insertedValues[i])
    //         handleValues(entrancesValuesList)
    //     }
    // }
    insertedValues.forEach(element => { 
        if(element.categoryID == 1){
        entrancesValuesList.push(element)
        handleValues(entrancesValuesList)
    }
        
    });
    
    handleValues(entrancesValuesList)
})

const btnExitsValues = document.querySelector(".summary__button__exits")

btnExitsValues.addEventListener("click", ()=>{
    let exitsValuesList = []
    // for(let i = 0; i<insertedValues.length; i++){
    //     if(insertedValues[i].categoryID == 2){
    //         exitsValuesList.push(insertedValues[i])
    //         handleValues(exitsValuesList)
    //     }
    // }
    insertedValues.forEach(element=>{
        if(element.categoryID == 2){
            exitsValuesList.push(element)
            console.log(exitsValuesList)
            handleValues(exitsValuesList)
        }
    })
})
