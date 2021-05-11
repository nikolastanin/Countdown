

let countDate = new Date(2022,3,27,17,33,30).getTime();

let days,hours,minutes,seconds;
let p = document.getElementById("p");

const timeCountdown = () =>{
    let currentDate = new Date().getTime();
    let diff = countDate-currentDate;
        
        days = Math.floor(diff/(1000*60*60*24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
        p.innerHTML = days+"days"+hours+"hours"+minutes+"minutes"+seconds+"secs";
        if(diff<0){
            console.log("timer ended");
        }
}

setInterval(timeCountdown,1000);

