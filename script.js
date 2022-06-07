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
window.addEventListener("mouseup", function(e){
    if (!event.target.closest(".startbutton") && !event.target.closest(".startmenu")){
        startmenu.style.bottom = "-95%"
    }
})
let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchmenu = document.getElementsByClassName("searchmenu")[0]

searchbutton.addEventListener("click", () => {

    if (searchmenu.style.bottom == "55px") {
        searchmenu.style.bottom = "-95%"
    }
    else {
        searchmenu.style.bottom = "55px"
    }
})
window.addEventListener("mouseup", function (e) {
    if (!event.target.closest(".searchbutton") && !event.target.closest(".searchmenu")) {
        searchmenu.style.bottom = "-95%"
    }
})