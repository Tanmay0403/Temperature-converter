var input = document.getElementById("temperature");
var from = document.getElementById("from");
var to = document.getElementById("to")
var output = document.querySelector(".result");
var unit = document.querySelector(".unit");


from.addEventListener('change',function(){
    if(from.value === 'C')
    {
        to.value = 'F';
        to.options[1].disabled = true;
    }
    else if(from.value === 'F')
    {
        to.value = 'C';
        to.options[0].disabled = true;
    }
})

function convert()
{
    var temperature = parseFloat(input.value);
    if(from.value === 'C'&& to.value === 'F')
    {
        var result = temperature * 9/5 + 32;
        output.innerText = result.toFixed(2);
        unit.innerHTML = "<sup>o</sup> F";

    }
    else if(from.value === 'F' && to.value === 'C')
    {
        var result = (temperature - 32) / (9/5);
        output.innerText = result.toFixed(2);
        unit.innerHTML = "<sup>o</sup> C";
    
    }
    else{
        alert("Something went wrong");
    }
    
}

