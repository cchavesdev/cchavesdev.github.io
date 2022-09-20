const btnTrigger = document.querySelectorAll('.btn-trigger')
const divTrigger = document.querySelectorAll('.div-trigger')
const closeBtnContainer = document.querySelector('.close-menu')
const closeBtn = document.querySelector('.close-menu button')
const menu = document.querySelector('.main-menu')
const secudaryNav = document.querySelector('.secundary-nav')
const dropdrownBtn = document.querySelectorAll('.dropdown-item-submenu')    
const inputNumber = document.querySelectorAll('input[type="number"]')
const inputDate = document.querySelectorAll('.date-input')



//Trigger show/hide elements

btnTrigger.forEach(element => {
    element.addEventListener('click', () => {
        const buttonSelected = element.getAttribute('data-triger')

        if(element.classList.contains('headerFn')){
            secudaryNav.classList.add('d-none')
            closeBtnContainer.classList.remove('d-none')
        }
        divTrigger.forEach(div => {
            if(div.getAttribute('data-triger') === buttonSelected){
                div.classList.toggle('active')
            }else{
                div.classList.remove('active')
            }
        });

    })
})


//Hide elements by close btn
closeBtn.addEventListener('click', () => {
    divTrigger.forEach(div => {
        div.classList.remove('active')
    });
    secudaryNav.classList.remove('d-none')
    closeBtnContainer.classList.add('d-none')
})

//Accordion function to submenu
dropdrownBtn.forEach((element, index) =>{

    element.addEventListener('click', () => {
        
        if(element.classList.contains('active')){
            element.classList.remove('active')
            return;
        }

        //delete active class to other buttons
        dropdrownBtn.forEach(element => {
            element.classList.remove('active')
        })

        //add active class
        element.classList.add('active')
    })
} )


//Counter number 
inputNumber.forEach(element => {
    const plusBtn = element.parentElement.children[1]
    plusBtn.addEventListener('click', () => {
        element.value++
    })
})


//Input date
inputDate.forEach(element => {
    const input = element.children[0]
    input.addEventListener('blur', () => {
        if(input.value.trim() !== ""){
            console.log(element)
            element.classList.add('date-input-active')
        }
    })
})