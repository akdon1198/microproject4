let buttonSelector = document.querySelectorAll(".single-button");
let resultSelector = document.querySelector(".result-field");
buttonSelector.forEach(element => {
    element.addEventListener("click", (e) => {
        if(element.textContent == "DEL")
        resultSelector.innerHTML.length == 1 ? resultSelector.innerHTML = "0":
        resultSelector.innerHTML = resultSelector.innerHTML.slice(0, resultSelector.innerHTML.length - 1)
        else if(element.textContent == "RESET")
        resultSelector.innerHTML = "0"
        else if(element.textContent == "="){
            let result = parseInt(resultSelector.innerHTML[0]);
            console.log(result);
            let symbol;
            for(let i = 1; i < resultSelector.innerHTML.length; i++){
                if(resultSelector.innerHTML[i] == " "){
                    continue;
                }
                else if(resultSelector.innerHTML[i] == "+"){
                    symbol = "+"
                }else if(resultSelector.innerHTML[i] == "x"){
                    symbol = "x"                  
                }else if(resultSelector.innerHTML[i] == "/"){
                    symbol = "/"
                }else if(resultSelector.innerHTML[i] == "-"){
                    symbol = "-"
                }else{
                    if(symbol === "+") result += parseInt(resultSelector.innerHTML[i])
                    else if(symbol === "x") result *= parseInt(resultSelector.innerHTML[i])
                    else if(symbol === "/") result /= parseInt(resultSelector.innerHTML[i])
                    else if(symbol === "-") result -= parseInt(resultSelector.innerHTML[i])
                }
            }
            console.log(result);
            resultSelector.innerHTML = result
        }
        else if(isNaN(element.textContent)){
            resultSelector.innerHTML += " "
            resultSelector.innerHTML += element.innerHTML
            resultSelector.innerHTML += " "
        }else{
            resultSelector.innerHTML === "0" ? resultSelector.innerHTML = element.innerHTML:
            resultSelector.innerHTML += element.innerHTML
        }
    })
});
