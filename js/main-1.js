
const Memory2 = document.getElementById('16GBmemory')
const Memory1 = document.getElementById('8GBmemory')

const MemoryCost = document.getElementById('memoryCost')

const totalPrice = document.getElementById('totalPrice')


function momoryTotal () {

const MemoryCost = Number(MemoryCost.innerText)
const totalPrice = Number(totalPrice.innerText)
const allTotal = MemoryCost + totalPrice;
totalPrice.innerText = allTotal;



}



Memory2.addEventListener('click' , function () {

    MemoryCost.innerText = '180'
   
    momoryTotal ()
});
Memory1.addEventListener('click' , function () {

    MemoryCost.innerText = '0'
   
    momoryTotal ()
});







