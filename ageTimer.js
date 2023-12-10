function updateAge() {
    var diffInMilliSeconds = new Date().getTime() - new Date("Dec 24, 2005, 00:00:00").getTime(); 
    var age = diffInMilliSeconds/1000/60/60/24/365.25;

    document.getElementById("ageBox").innerText = age;    

    if(new Date().getUTCDate() == 24 && new Date().getUTCMonth() == 11){
        document.getElementById("18+").innerText = "Birthday";
    }
    
}

updateAge();
setInterval(updateAge, 1000);

