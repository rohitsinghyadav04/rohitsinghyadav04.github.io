const menuBtn=document.getElementById("menuBtn");
const navLinks=document.getElementById("navLinks");
const themeBtn=document.getElementById("themeBtn");

menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const savedTheme=localStorage.getItem("theme");
if(savedTheme==="light"){document.body.classList.add("light");themeBtn.textContent="☀";}
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  const light=document.body.classList.contains("light");
  themeBtn.textContent=light?"☀":"☾";
  localStorage.setItem("theme",light?"light":"dark");
});
