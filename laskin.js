const tulos = document.getElementById("tulos")
var buttons = document.getElementsByTagName("button")
let tulosValue = '';

for(item of buttons){
    item.addEventListener('click', (e) => {
        var buttonText = e.target.innerText;
        if(buttonText == "AC"){
            tulosValue = '';
            tulos.innerHTML = "0"
        }
        else if(buttonText == ","){
            tulosValue += "."
            tulos.innerHTML = tulosValue
            tulos.innerHTML = tulos.innerHTML.replace('.', ',')
        }
        else if(buttonText == "C"){
            delete tulosValue[-1]
            tulos.innerHTML = tulosValue
        }
        else if(buttonText == "="){
            tulos.innerHTML = eval(tulosValue)
            tulos.innerHTML = tulos.innerHTML.replace('.', ',')
        }else{
            tulosValue += buttonText
            tulos.innerHTML = tulosValue
            tulos.innerHTML = tulos.innerHTML.replace('.', ',')

        }
    })
}
