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
    let submit = document.querySelector("#submit");
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

    //--------------------------------------------------------------------------------------


    // function minuteur() {
    //     sec --;
    //     if(sec <= 0){
    //         sec == 59;
    //         min --;
    //     }
    //     if(min <= 0){
    //         min == 59;
    //         hrs --;
    //     }
    //     if(hrs <= 0){
    //         hrs == 0;
    //     }
        
    //     let minuteur = hrs + ":" + min + ":" + sec;
    //     setInterval(minuteur, 1000);
    //     // console.log(minuteur);
    //     timer.innerHTML = minuteur;
    //     //timeout = setTimeout(minuteur,100);
    // }

    // function startingo(){
    //     starting.addEventListener("click",minuteur);

    //     console.log(minuteur);
    // }
    // startingo();

    // function remeta() {
    //     sec = 0;
    //     min = 0;
    //     hrs = 0;
    //     let minute = hrs + ":" + min + ":" + sec;
    //     timer.innerHTML = minute;
    // }

    // function remetage (){
    //     remet.addEventListener("click",remeta);
    // }
    // remetage();

    // function addTime() {
    //     sec ++;
    //     let minute = hrs + ":" + min + ":" + sec;
    //     timer.innerHTML = minute;
    // }

    // function addSeconds() {
    //     add.addEventListener("click", addTime);
    //     addTime();
    // }
    // addSeconds();

    let startingMinutes = 10;
    let time = startingMinutes * 60;

    function startCount(){
        document.getElementById("starting").addEventListener("click",()=>{
            let interval = setInterval(updateCountDown, 1000);
            interval;
        });
    }
    startCount();

    function resetCount(){
        document.getElementById("remet").addEventListener("click",()=>{
            clearInterval(interval);
            timer.innerHTML = `${minutes}:${seconds}`;
        })
    }
    resetCount();

    function updateCountDown() {
        let minutes = Math.floor(time/60);
        let seconds = time%60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer.innerHTML = `${minutes}:${seconds}`;
        time --;

            if(minutes == 0 && seconds == 0){
                clearInterval(interval);
                window.alert("THE FINAL COUNT DOWN TU TUUUUUU TU TU TU TU");
            }
            return minutes;

        }



        
        function addMin(){
            updateCountDown()
            document.getElementById("add").addEventListener("click",()=>{
                minutes ++;
            });
        }
        addMin(); 



    
    
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

























    

})