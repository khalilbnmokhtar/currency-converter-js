let url 
let text = document.getElementById('money')
let btn_conv = document.getElementById('conv')
let to_change = document.getElementById('sel1')
let to_change2 = document.getElementById('sel2')
let dol = document.getElementById('usd')
let eu = document.getElementById('eur')
let rsa = document.getElementById('sar')
let uem = document.getElementById('uae')
let dat = document.getElementById('date')
let result = document.getElementById('result')


window.onload = function(){
    url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
    fetch(url)
        .then(function(Response){
            Response.json().then(function(data){
                
                dol.value = data.usd.tnd +' TND' 
                
               
            }).catch (function(){ dol.value =" chrgmt impossible "})
        })
        url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`
        fetch(url)
            .then(function(Response){
                Response.json().then(function(data){
                     
                    eu.value = data.eur.tnd +' TND' 
                   
                }).catch (function(){ dol.value =" chrgmt impossible "})
            })
            url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/sar.json`
            fetch(url)
                .then(function(Response){
                    Response.json().then(function(data){
                         
                        rsa.value = data.sar.tnd +' TND' 
                       
                    }).catch (function(){ dol.value =" chrgmt impossible "})
                })
                url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/aed.json`
                fetch(url)
                    .then(function(Response){
                        Response.json().then(function(data){
                             
                            uem.value = data.aed.tnd +' TND' 
                           
                        }).catch (function(){ dol.value =" chrgmt impossible "})
                    })
            
   timeCount()
 }


to_change2.addEventListener('change', function(){

    url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${to_change.value}/${to_change2.value}.json`
    fetch(url)
        .then(function(Response){
             Response.json().then(function(data){
                result.classList.remove('d-none')
                result.innerHTML = ` date : ${data.date} taux de change : ${data[to_change2.value]} ${to_change2.value}`
                
             }).catch(function(){ 
                result.classList.remove('d-none')
                result.innerHTML = " charmgnt d'api impossible "})
        })
})


function timeCount() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();

    var hour = today.getHours();
    if(hour<10)
    {hour = "0"+hour}

    var minute = today.getMinutes();
    if(minute<10)
    {minute = "0"+minute}

    var second = today.getSeconds();
    if(second<10){second = "0"+second}
    

    dat.value = day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second 

    setTimeout("timeCount()", 1000);

}

function changeMode()
{
    let btnMode = document.getElementById('btn_mode')
    
    let mode = document.getElementsByClassName('mode')
   
    if (btnMode.value == 'white mode')
    {    console.log(mode)
        Array.from(mode).forEach( (el) => {
            el.classList.add('bg-light')
            el.classList.remove('bg-dark')
            el.classList.remove('text-white')
            el.classList.add('border')
            el.classList.add ('border-0')
          });
          btnMode.value="dark mode"
          btnMode.classList.remove('btn-danger')
          btnMode.classList.add('btn-dark')
         
    }
    else
    {
        Array.from(mode).forEach( (el) => {
            el.classList.add('bg-dark')
            el.classList.remove('bg-light')
            if (el.classList.value.includes("text-danger") == false)
            {el.classList.add('text-white')}
          });
          btnMode.value="white mode"
          btnMode.classList.remove('btn-dark')
          btnMode.classList.add('btn-danger')
                     
    }
    
}
    