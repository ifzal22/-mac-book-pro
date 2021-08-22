// 
const Memory2 = document.getElementById('16GBmemory')
const Memory1 = document.getElementById('8GBmemory')

const MemoryCost = document.getElementById('memoryCost')
const StorageCost = document.getElementById('storageCost')
const dellyvaryamount = document.getElementById('dellyvary')
const best =document.getElementById('best-price')

const totalPrice = document.getElementById('totalPrice')
const finalPrice = document.getElementById('final-price')
// funtion calculation -----
function momoryTotal () {
const bestPrice =Number(best.innerText)
const memoryCharge = Number(MemoryCost.innerText);
const storageCharge = Number(StorageCost.innerText)
const vellyvariCharge = Number(  dellyvaryamount.innerText)

const TotalPrice = memoryCharge + storageCharge + vellyvariCharge + bestPrice;
totalPrice.innerText = TotalPrice ;


const finalTotalPrice =  memoryCharge + storageCharge + vellyvariCharge + bestPrice;
finalPrice.innerText = finalTotalPrice;

// finalCost.innerText = TotalPrice;

}
//  promo ----->
function finelTotal (){
    const bestPrice =Number(best.innerText)
const memoryCharge = Number(MemoryCost.innerText);
const storageCharge = Number(StorageCost.innerText)
const dellyvariCharge = Number(dellyvaryamount.innerText)

let promoInput = document.getElementById('promo-input')
let promoInputValue = promoInput.value;
promoInput.value= '';
if( promoInputValue == 'stevekaku'){
const discount =( bestPrice + memoryCharge + storageCharge + dellyvariCharge) * 0.2;
totalPrice.innerText = ( bestPrice + memoryCharge + storageCharge + dellyvariCharge) - discount;
finalPrice.innerText =  ( bestPrice + memoryCharge + storageCharge + dellyvariCharge) - discount;


// const discountfinal = ( memoryCharge + storageCharge + vellyvariCharge + bestPrice) * 0.2;
// finalPrice.innerText  = ( memoryCharge + storageCharge + vellyvariCharge + bestPrice) - discountfinal;
}
else{
    totalPrice.innerText = bestPrice + memoryCharge + storageCharge + dellyvariCharge; 
    finalPrice.innerText = bestPrice + memoryCharge + storageCharge + dellyvariCharge; 
}

return totalPrice.innerText , finalPrice.innerText;


}
finelTotal ()


// click items ----->

Memory2.addEventListener('click' , function () {

    MemoryCost.innerText = '180'
   
    momoryTotal ()
    finelTotal ()
});
Memory1.addEventListener('click' , function () {

    MemoryCost.innerText = '0'
   
    momoryTotal ()
    finelTotal ()
});

// storage ----
function storageTotal(){
    const storageCharge = Number(StorageCost.innerText);
    const memoryCharge = Number( MemoryCost.innerText);
   
    newAllPrice =  memoryCharge  + storageCharge;
    totalPrice.innerText = + newAllPrice;
  
}

const  storage1 = document.getElementById('storage256')
const  storage2 = document.getElementById('storage512')
const  storage3 = document.getElementById('storage1tb')




storage1.addEventListener('click' , function () {
    StorageCost.innerText = '0'
    momoryTotal ()
    finelTotal ()
})
storage2.addEventListener('click' , function () {
    StorageCost.innerText = '100'
    momoryTotal ()
    finelTotal ()
})
storage3.addEventListener('click' , function () {
    StorageCost.innerText = '180'

    momoryTotal ()
    finelTotal ()
})



// Delevary 

const freeDelly = document.getElementById('freeDellivery')
const freeDelly20 = document.getElementById('dellivery20')


freeDelly.addEventListener('click' ,function () {
    dellyvaryamount.innerText = '0'
    momoryTotal ()
    finelTotal ()
})
freeDelly20.addEventListener('click' ,function () {
  dellyvaryamount.innerText = '20'
  momoryTotal ()
  finelTotal ()
})


document.getElementById('promo-bottom').addEventListener('click', function () {
    finelTotal ()

})









