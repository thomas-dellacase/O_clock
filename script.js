'use strict';
document.addEventListener('DOMContentLoaded',()=>{
    let h1 = document.querySelector("#h1");
    let start = document.querySelector("#start");
    let stop = document.querySelector("#stop");
    let reset = document.querySelector("#reset");
    let tours = document.querySelector("#tours");
    let lap = document.querySelector("#lap");
    let timer = document.querySelector("#timer");
    let add = document.querySelector("#add");
    let remove = document.querySelector("#remove");
    let starting = document.querySelector("#starting");
    let remet = document.querySelector("#remet");
    let sec = 0;
    let min = 0;
    let hrs = 0;
    let timeout;
//----------------------------------------------------------
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
        start.addEventListener("click",chronometer)
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

    function tour() {
        let lapp = hrs + ":" + min + ":" + sec;
        lap.innerHTML = lapp;
    }

    function touro() {
        tours.addEventListener("click",tour);
    }
    touro();

    //---------------------------------------------------------------------
    function minuteur() {
        sec --;
        if(sec <= 0){
            sec == 60;
            min --;
        }
        if(min <= 0){
            min == 60;
            hrs --;
        }
        if(hrs <= 0){
            hrs == 0;
        }
        
        let minuteur = hrs + ":" + min + ":" + sec;
        console.log(minuteur);
        timer.innerHTML = minuteur;
        timeout = setTimeout(minuteur,1000);
    }

    function startingo(){
        starting.addEventListener("click",minuteur);
    }
    startingo();

    function remeta() {
        sec = 0;
        min = 0;
        hrs = 0;
        let minute = hrs + ":" + min + ":" + sec;
        timer.innerHTML = minute;
    }

    function remetage (){
        remet.addEventListener("click",remeta);
    }
    remetage();

    function addTime() {
        sec ++;
        let minute = hrs + ":" + min + ":" + sec;
        timer.innerHTML = minute;
    }

    function addSeconds() {
        add.addEventListener("click", addTime);
        addTime();
    }
    addSeconds();

//-------------------------------------------------------------------------------------
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

























    

})