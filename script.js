
document.addEventListener('DOMContentLoaded',()=>{
    let h1 = document.querySelector("#h1");
    let start = document.querySelector("#start");
    let stop = document.querySelector("#stop");
    let reset = document.querySelector("#reset");
    let tours = document.querySelector("#tours");
    let lap = document.getElementById("lap");
    //let timer = document.querySelector("#timer");
    //let add = document.querySelector("#add");
    //let remove = document.querySelector("#remove");
    //let starting = document.querySelector("#starting");
    let remet = document.querySelector("#remet");
    let submit = document.querySelector("#submit");
    let sec = 0;
    let min = 0;
    let hrs = 0;
    let timeout;
//-------------------------------chrono---------------------------
    function chronometer() {
            sec ++;
            if(sec >= 60){
                sec = 0;
                min ++;
            }
            if(min >= 60){
                min = 0;
                hrs ++;
            }
        let chrono = hrs + ":" + min + ":" + sec;
        h1.innerHTML = chrono;
        timeout = setTimeout(chronometer,1000);
    }
    function starto() {
        start.addEventListener("click",chronometer);
        start.disable()=true;
        stop.disable()=false;
        reset.disable()=false;
        tours.disable()=false;
    }
    starto();

    function Stopage() {
        stop.addEventListener("click", ()=>{
            clearTimeout(timeout);
        })
    }
    Stopage();

    function resetage(){
        sec = 0;
        min = 0;
        hrs = 0;
        let chrono = hrs + ":" + min + ":" + sec;
        h1.innerHTML = chrono;
    }

    function reseto(){
        reset.addEventListener("click", resetage);
    }
    reseto();

    // function tour() {
    //     let lapp = hrs + ":" + min + ":" + sec;
    //     //lap.innerHTML = lapp;
    // }

    function touro() {
        tours.addEventListener("click",tourage);
    }
    touro();
 

    function tourage(){
        let lapp = hrs + ":" + min + ":" + sec;
        let newP = document.createElement("p");
        lap.appendChild(document.createElement("newP"))
        newP.id = "lapping";
        newP.innerHTML = lapp;
        lap.after(newP);
    }

    //-----------------------------------timer---------------------------------------------------
    var starting = document.getElementById("starting");
    var reseting = document.getElementById("reseting");

    var h = document.getElementById("hour");
    var m = document.getElementById("minute");
    var s = document.getElementById("sec");

    var startTimer = null;

    function timera(){
        if(h.value == 0 && m.value == 0 && s.value == 0){
            alertCount()
            h.value = 0;
            m.value = 10;
            s.value = 0;
            stopTimer()
        }else if(s.value !=0){
            s.value --;
        }else if(m.value !=0 && s.value == 0){
            s.value = 59;
            m.value --;
        }else if(h.value !=0 && m.value == 0){
            m.value == 60;
            h.value--;
        }
        return
        
    }

    function alertCount(){
        if(h.value == 0 && m.value == 0 && s.value == 0){
            window.alert("THE FINAL COUNT DOWN TU TUUUUUU TU TU TU TU");
            return
        }
    }
        
    function stopTimer(){
        clearInterval(startTimer);
    }

    starting.addEventListener("click",function(){
        //console.log("hello");
        function startInterval(){
            startTimer = setInterval(function(){
                timera();
            }, 1000)
        }
        startInterval();
    })
    reseting.addEventListener("click", function(){
        h.value = 0;
        m.value = 10;
        s.value = 0;
        stopTimer(); 
    })
//--------------------------------------------------------------------------------------------------
    function showTimer(){
        const date = new Date()
        let innerp = document.querySelector("#time")
        let sec = date.getSeconds();
        let min = date.getMinutes();
        let hrs = date.getHours();
        let timer = hrs + ":" + min + ":" + sec;
        innerp.innerHTML = timer;
        setTimeout(showTimer, 1000);
    }
    showTimer();

//--------------------------------------------------------------------------------------------------
    let setAlarm = document.querySelector("#buttonSetAlarm");
    let clearAlarm = document.querySelector("#buttonClearAlarm");
    let reveille = document.querySelector("#reveil");
    let message = document.querySelector("#messAlarm");

    const audio = new Audio("theFinal.mp3");
    audio.loop = true;
    let alarmTime = null;
    let alarmTimeout = null;
    let messag = null;

    function alarmClock(){
        const date = new Date()
        let innerp = document.querySelector("#alarme");
        let sec = formatTime(date.getSeconds());
        let min = formatTime(date.getMinutes());
        let hrs = formatTime(date.getHours());
        let timer = hrs + ":" + min + ":" + sec;
        innerp.innerHTML = timer;
        setTimeout(alarmClock, 1000);

    }
    alarmClock();
    function formatTime(time){
        if(time < 10){
            return '0' + time
        }
        return time;
    }

    function setAlarmTime(){
        reveille.addEventListener("change",()=>{
            console.log("setAlarmTime");
            alarmTime = reveille.value;
        })
    }            
    setAlarmTime();

    function messageAlarm(){
        message.addEventListener("focusout",()=>{
            console.log("messs");
            messag = message.value;
        });
    }
    messageAlarm();


    function setAlarme(){
        if (alarmTime){
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);
            if(timeToAlarm.getTime() > current.getTime()){
                const timeout = timeToAlarm.getTime() - current.getTime();
                let alarmTimeout = setTimeout(()=> audio.play(), timeout);
                let messageAlerte = setTimeout(()=> window.alert(messag), timeout);
                console.log(timeout);
                console.log(timeToAlarm.getTime());
                console.log(current.getTime());
                console.log(alarmTimeout);
                console.log(timeToAlarm.length);
                console.log(current.length);
                console.log(typeof timeToAlarm);
                console.log(typeof current);
                window.alert("Reveil set up pour le" + " " + alarmTime);
            }
            if(timeToAlarm.getTime() == current.getTime()){
                
                console.log('coucougfd');
                
            }
        }
    }
    function alarmSet(){
        setAlarm.addEventListener('click',()=>{
            console.log('coucou2');
            setAlarme();
        });
    }
    alarmSet();

    function clearAlarme(){
        audio.pause();
        if(alarmTimeout){
            clearTimeout(alarmTimeout);
            alert("Reveil cleared")
        }
    }
    function clearedAlarm(){
        clearAlarm.addEventListener('click',clearAlarme);
    }
    clearedAlarm();



})




