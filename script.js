const tabs=document.querySelectorAll(".tab");

const pages=document.querySelectorAll(".page");

const indicator=document.querySelector(".indicator");

function moveIndicator(el){

indicator.style.width=el.offsetWidth+"px";

indicator.style.left=el.offsetLeft+"px";

}

moveIndicator(document.querySelector(".active"));

tabs.forEach(tab=>{

tab.onclick=()=>{

tabs.forEach(t=>t.classList.remove("active"));

pages.forEach(p=>p.classList.remove("active"));

tab.classList.add("active");

document
.getElementById(tab.dataset.page)
.classList.add("active");

moveIndicator(tab);

}

});
