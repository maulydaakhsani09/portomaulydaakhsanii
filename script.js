const stage=document.getElementById("stage");
function fit(){const s=Math.min(innerWidth/1024,innerHeight/576);stage.style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener("resize",fit);fit();

const slides=document.querySelectorAll(".slide"),btns=document.querySelectorAll("#nav button");
let timer;
function show(id){
  slides.forEach(s=>s.classList.toggle("on",s.id===id));
  const tab=id==="summary"?"hero":id;
  btns.forEach(b=>b.classList.toggle("on",b.dataset.go===tab));
}
function go(id){
  clearTimeout(timer);
  show(id);
  if(id==="hero") timer=setTimeout(()=>show("summary"),4500); // judul tampil dulu, lalu otomatis ke ringkasan
}
btns.forEach(b=>b.onclick=()=>go(b.dataset.go));
document.getElementById("hero").onclick=()=>go("summary");
go("hero");

// zoom gambar sertifikat
const lb=document.getElementById("lb");
document.addEventListener("click",e=>{
  const i=e.target.closest("img[data-zoom]");
  if(i){lb.querySelector("img").src=i.src;lb.classList.add("on")}
});
lb.onclick=()=>lb.classList.remove("on");
