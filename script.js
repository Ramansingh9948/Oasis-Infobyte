
let currentmode = "light";

function Dark(e)  {
let body = document.querySelector("body");
let btn = document.querySelector(".theme");

// e.preventDefault();
    console.log(currentmode);

if(currentmode === "light") {
    currentmode = "dark";
    // console.log(currentmode);
    body.style.color="white";
    body.style.backgroundColor="black";
    btn.textContent ="L";

}
else {
    currentmode = "light";
    body.style.color="black";
    body.style.background="white";
    btn.textContent ="D";
}
}






/*let currentmode = "light";
function dark(e) {
    e.preventDefault();
    let chng = document.querySelector("body");
    console.log(currentmode);
    if(currentmode=== "light") {
        currentmode = "dark";
        chng.style.color="white";
    chng.style.backgroundColor="black";
    }
    else {
        currentmode = "light";
        chng.style.color="black";
    chng.style.background="white";
    }
    
}*/