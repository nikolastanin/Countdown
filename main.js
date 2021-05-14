

let countDate = new Date(2022,3,27,17,33,30).getTime();
let d,h,m,s;
let dS = document.getElementById("days");
let hS = document.getElementById("hours");
let mS = document.getElementById("minutes");
let sS = document.getElementById("seconds");

const timeCountdown = () =>{
    let currentDate = new Date().getTime();
    let diff = countDate-currentDate;
        //time calculations
        d= Math.floor(diff/(1000*60*60*24));
        h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        s = Math.floor((diff % (1000 * 60)) / 1000);
      displayingTimes();
        
        
        if(diff<0){
            console.log("timer ended");
        }
}

const displayingTimes = () =>{
        dS.innerHTML = d;
        hS.innerHTML = h;
        mS.innerHTML = m;
        sS.innerHTML = s;
}
//updates every second
setInterval(timeCountdown,1000);

