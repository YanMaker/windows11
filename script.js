let startbutton = document.getElementsByClassName("startbutton")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
startbutton.addEventListener("click", ()=>{

    if(startmenu.style.bottom == "55px"){
        startmenu.style.bottom = "-95%"
    }
    else{
        startmenu.style.bottom = "55px"
    }
})