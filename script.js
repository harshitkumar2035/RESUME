console.log("Resume Loaded");
const printBtn=document.getElementById("print-btn");

printBtn.addEventListener("click",()=>{
window.print();
});

const downloadBtn=document.getElementById("download-btn");
downloadBtn.addEventListener("click",()=>{
    window.print();
});

const themeBtn=document.getElementById("theme-btn");
themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
});
 
