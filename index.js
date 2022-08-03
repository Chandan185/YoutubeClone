const menu=document.getElementById("menu-btn");
const sidebar=document.getElementById("side-bar")
const videocontainer=document.querySelector(".video-container");
let f=0;
function altersidebar(){
  sidebar.classList.toggle("resize-sidebar");
  videocontainer.classList.toggle("resize-video");
}


menu.addEventListener('click',altersidebar);
