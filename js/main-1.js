// memory 
const Memory2 = document.getElementById('16GBmemory')
const Memory1 = document.getElementById('8GBmemory')

const MemoryCost = document.getElementById('memoryCost')

const totalPrice = document.getElementById('totalPrice')

function momoryTotal () {
const memoryCharge = Number( MemoryCost.innerText);


totalPrice.innerText = memoryCharge + parseInt( totalPrice.innerText);

}

Memory2.addEventListener('click' , function () {

    MemoryCost.innerText = '180'
   
    momoryTotal ()
});
Memory1.addEventListener('click' , function () {

    MemoryCost.innerText = '0'
   
    momoryTotal ()
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

const StorageCost = document.getElementById('storageCost')


storage1.addEventListener('click' , function () {
    StorageCost.innerText = '0'
    storageTotal()
})
storage2.addEventListener('click' , function () {
    StorageCost.innerText = '100'
    storageTotal()
})
storage3.addEventListener('click' , function () {
    StorageCost.innerText = '180'
    storageTotal()
})



// Delevary 

const freeDelly = document.getElementById('freeDellivery')
const freeDelly20 = document.getElementById('dellivery20')
const dellyvaryamount = document.getElementById('dellyvary')



function dellyveryCharge () {
    const delivaryCharge = Number(dellyvaryamount.innerText)
    const storageCharge = Number(StorageCost.innerText);
    const memoryCharge = Number( MemoryCost.innerText);
   
    newAllPrice =  memoryCharge  + storageCharge + delivaryCharge;
    totalPrice.innerText = + newAllPrice;
}




freeDelly.addEventListener('click' ,function () {
    dellyvaryamount.innerText = '0'
    dellyveryCharge ()
})
freeDelly20.addEventListener('click' ,function () {
  dellyvaryamount.innerText = '20'
  dellyveryCharge ()
})




// promo 

document.getElementById('promo-bottom').addEventListener(
    'click', function () {

        console.log('tik ase')
        promo()
    }
);



function promo () {

let previousTotalInput = document.getElementById('totalPrice');
let previousTotal = parseInt(previousTotalInput.innerText);
const finalCost = document.getElementById('final-price');


let promoInput = document.getElementById('promo-input');
let  promoInputValue = promoInput.value; 
if(promoInputValue == 'stevekaku'){
    const discount = previousTotal * 0.2;
    const newTotalprice = parseInt(previousTotal - discount);
    const newTotal = previousTotalInput.innerText = newTotalprice;
    finalCost.innerText = newTotal;
   
}
promoInput.value = '';
}






