'use strict';
let input=document.querySelector('input')
let button=document.querySelector('button')
let text=document.querySelector('p')
let block2=document.querySelector('.block2')
let arr=[] 
input.addEventListener('keypress', function(event){
    if(event.key=='Enter'){
            arr.push(input.value) 
            input.value=null
            let set=new Set(arr)
            let arr2=[...set]
            button.addEventListener('click', function func(){                
                text.innerHTML=arr2.length+' разный слова введено'+'<br>' +' ОНИ: '+arr2
                
                block2.innerHTML=arr.length-arr2.length

                if(block2.innerHTML!=0){
                    block2.innerHTML=arr.length-arr2.length+' Раза введено одинаковое слово  '
                }
                else{
                    block2.innerHTML='Одинаковое слово не введено'
                }
            })
    }
})
