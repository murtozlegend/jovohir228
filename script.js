const cal=document.getElementById("cal")
function barabar(){
    cal.value=eval(cal.value)
}

function tozalash(){
    cal.value="";
}
function aa(){
    cal.value=cal.value.slice(0, -1)
}