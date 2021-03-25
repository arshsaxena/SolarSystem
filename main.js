var yearsMercuryPassed = 0;
function startMercuryCounter() {
    document.getElementById('mercury-counter').innerHTML = yearsMercuryPassed + " ";
    yearsMercuryPassed++;
    setTimeout(startMercuryCounter, 3000);
}
startMercuryCounter()

var yearsVenusPassed = 0;
function startVenusCounter() {
    document.getElementById('venus-counter').innerHTML = yearsVenusPassed + " ";
    yearsVenusPassed++;
    setTimeout(startVenusCounter, 4800);
}
startVenusCounter()

var yearsEarthPassed = 0;
function startEarthCounter() {
    document.getElementById('earth-counter').innerHTML = yearsEarthPassed + " ";
    yearsEarthPassed++;
    setTimeout(startEarthCounter, 7200);
}
startEarthCounter()

var yearsMarsPassed = 0;
function startMarsCounter() {
    document.getElementById('mars-counter').innerHTML = yearsMarsPassed + " ";
    yearsMarsPassed++;
    setTimeout(startMarsCounter, 12000);
}
startMarsCounter()

var revolvedAsteroidBelt = 0;
function startAsteroidBeltCounter() {
    document.getElementById('asteroid-belt-counter').innerHTML = revolvedAsteroidBelt + " ";
    revolvedAsteroidBelt++;
    setTimeout(startAsteroidBeltCounter, 15000);
}
startAsteroidBeltCounter()

var yearsJupiterPassed = 0;
function startJupiterCounter() {
    document.getElementById('jupiter-counter').innerHTML = yearsJupiterPassed + " ";
    yearsJupiterPassed++;
    setTimeout(startJupiterCounter, 18000);
}
startJupiterCounter()

var yearsSaturnPassed = 0;
function startSaturnCounter() {
    document.getElementById('saturn-counter').innerHTML = yearsSaturnPassed + " ";
    yearsSaturnPassed++;
    setTimeout(startSaturnCounter, 36000);
}
startSaturnCounter()

var yearsUranusPassed = 0;
function startUranusCounter() {
    document.getElementById('uranus-counter').innerHTML = yearsUranusPassed + " ";
    yearsUranusPassed++;
    setTimeout(startUranusCounter, 42000);
}
startUranusCounter()

var yearsNeptunePassed = 0;
function startNeptuneCounter() {
    document.getElementById('neptune-counter').innerHTML = yearsNeptunePassed + " ";
    yearsNeptunePassed++;
    setTimeout(startNeptuneCounter, 60000);
}
startNeptuneCounter()

var yearsPlutoPassed = 0;
function startPlutoCounter() {
    document.getElementById('pluto-counter').innerHTML = yearsPlutoPassed + " ";
    yearsPlutoPassed++;
    setTimeout(startPlutoCounter, 120000);
}
startPlutoCounter()

setInterval(showTime, 1000); 
function showTime() {   
    let time = new Date();
    let month = time.toLocaleString('default', { month: 'long' });
    let date = time.getDate();
    let year = time.getFullYear();
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    let am_pm = "AM"; 

    if(month.toString().length == 1) {
        month = '0'+month;
    }
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hour = 12; 
        am_pm = "AM"; 
    } 

    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    let currentTime = month + " " + date + "," + " " + year + " " + "•" + " " + hour + ":" + min + ":" + sec + " " + am_pm; 

    document.getElementById("clock").innerHTML = currentTime; 
} 

showTime(); 