function updateClock() {
    const now = new Date();
    const jam = now.toLocaleTimeString("id-ID");
    const tanggal = now.toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    document.getElementById("clock").innerHTML = jam;
    document.getElementById("date").innerHTML = tanggal;
}
setInterval(updateClock,1000);
updateClock();

const apiUrl="https://script.google.com/macros/s/AKfycbzc1iRwpPSA7Bt9XMwofapB5fWBU6BzPlAH11Dmq1HpmrL3ofZq7z3jhcOt77UW-Jmn/exec";
async function loadProgress(){
    try{
        const response=await fetch(apiUrl);
        const data=await response.json();
        document.getElementById("totalData").innerHTML=data.total;
        document.getElementById("sisaData").innerHTML=data.sisa;
        document.getElementById("persen").innerHTML=data.persen+"%";
        document.getElementById("progressFill").style.width=data.persen+"%";
    }

    catch(error){
        console.log(error);
    }

}
loadProgress();
setInterval(loadProgress,10000);

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if(savedTheme==="dark"){
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML="☀️";
}

themeBtn.onclick=function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML="☀️";
        localStorage.setItem("theme","dark");
    }else{

        themeBtn.innerHTML="🌙";
        localStorage.setItem("theme","light");
    }
}

const topBtn = document.getElementById("topBtn");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 250){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
}
topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
