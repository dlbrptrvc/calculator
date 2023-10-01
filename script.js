function initializeDOM(parentElementID) {
    window[parentElementID] = document.querySelector('#'+parentElementID)
    Array.from(window[parentElementID].children).forEach(element => {
        if (element.id) {initializeDOM(element.id)}        
    });
}
initializeDOM('body')

let args = ['','']
let operator = ''
let currentIO = [0,0]
const maxDisplayLength = 9
const maxNumber = 999999999

function initializeDisplay() {
    for (let i=0;i<maxDisplayLength;i++) {
        document.createElement('digit')
    }
}

function operate(func,args) {
    switch (func) {
        case 'divide': return +args[0]/(+args[1])
        case 'multiply': return +args[0]*(+args[1])
        case 'add': return +args[0]+(+args[1])
        case 'subtract': return +args[0]-(+args[1])
    }
}

function adjust(r) {
    
}

Array.from(document.querySelectorAll(".digit")).forEach(element => {
    element.addEventListener('click', e => addDigit(element.textContent))
})

function addDigit(x) {
    let numberOfDigits = display.textContent.replace('.','').length
    if (currentIO[0]==currentIO[1]) {
        if (numberOfDigits<maxDisplayLength) {display.textContent += x}
    } else {
            currentIO=[1,1]
            display.textContent = x
        }
}

clear.addEventListener('click',()=>{
    args=['','']
    currentIO=[0,0]
    operator=''
    display.textContent=''
})

backspace.addEventListener('click',()=>{
    display.textContent = display.textContent.slice(0,-1)
})

decimal.addEventListener('click',()=>{
    if (!display.textContent.includes('.')) {display.textContent+='.'}
})

divide.addEventListener('click',(e)=>{
    if (currentIO[0]==0) {
        operator = e.target.id
        currentIO = [1,0]
    } else {
        args[0]=operate(e.target.id,args)
    }


    arg[0]=+arg[0]/arg[1]
})
