
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
    //let starting = document.querySelector("#starting");
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

    // let startingMinutes = 10;
    // let time = startingMinutes * 60;


    // function updateCountDown() {
    //     let minutes = Math.floor(time/60);
    //     let seconds = time%60;

    //     seconds = seconds < 10 ? '0' + seconds : seconds;
    //     timer.innerHTML = `${minutes}:${seconds}`;
    //     time --;

    //     document.getElementById("starting").addEventListener("click",()=>{
    //         setInterval(updateCountDown, 1000);
    //         //return interval;
    //     });

    //         if(minutes == 0 && seconds == 0){
    //             clearInterval(interval);
    //             window.alert("THE FINAL COUNT DOWN TU TUUUUUU TU TU TU TU");
    //         }
            
    //     }

    //     function resetCount(){
    //         document.getElementById("remet").addEventListener("click",()=>{
    //             clearInterval();
    //             //var interval = setInterval(updateCountDown, 1000);
    //             let minutes = 10;
    //             let seconds = 0;
    //             timer.innerHTML = `${minutes}:${seconds}`;
    //         })
    //     } resetCount();
        

    //     function addMin(){
    //         updateCountDown()
    //         document.getElementById("add").addEventListener("click",()=>{
    //             minutes ++;
    //         });
    //     }
    //     addMin(); 

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
})




