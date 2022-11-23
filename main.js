let mainInp = document.querySelector('.main__inp')
let btn = document.querySelector('.btn')
let itemVar1 = document.querySelector('.item__var1')
let itemVar2 = document.querySelector('.item__var2')
let itemVar3 = document.querySelector('.item__var3')
let itemVar4 = document.querySelector('.item__var4')

btn.addEventListener('click', function(){
    let inputValue = mainInp.value.split('km')[0]
    
    function Myfunction(x){
        return x
    }
itemVar1.textContent = (inputValue / Myfunction(3.6)).toFixed(2)

function Myfunction(y){
        return y
    }
itemVar2.textContent = (inputValue / Myfunction(20.1)).toFixed(2)

function Myfunction(z){
        return z
    }
itemVar3.textContent = (inputValue / Myfunction(70)).toFixed(2)

function Myfunction(b){
        return b
    }

itemVar4.textContent = (inputValue / Myfunction(800)).toFixed(2)
}
)