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

const apiUrl="https://script.googleusercontent.com/a/macros/universitaspahlawan.ac.id/echo?user_content_key=AUkAhnSgkoIM4djAjIxilHoLX8wfbM2CjG6XOMq7Wd0az-stqAaZk3zGeRPqr8CmJ8SYIJ7yKtEAMcCxR95TuSmgbOdaC0btq9CY7cwg2Vc522cO-KcwgYkxP9EpEja8Pfin1Ix1RdOrfuYkOR1jmvVQcknPBQrF3_dNXBtsXhphsAOjL8JdQBIpq_v8GKu30_qPHIyqCs2l3mtJ07E-A63E3n28QDG6Lnt10o1KgOZ6SMJsHcSfP9zlBUswzX-PmDmDhjFlHN_lWxla1-vG_wydTILTl-eTrA_8jDYd-fPyz4MKR0JUhcR4nKxx0OOoBQ&lib=Mm8EKvAEJph62JK0OaRKBKE4Q1zlFJq4E";
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