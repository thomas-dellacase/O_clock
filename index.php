<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <main>
        <article id="Horloge">
                <h1 id="time"></h1>
        </article>

        <article id="Chrono">
            <h1 id="h1"><time></time></h1>
            <button id="start">start</button>
            <button id="stop">stop</button>
            <button id="reset">reset</button>
            <button id="tours">tours</button>
            <h2>Tours</h2>
            <div id="lap">
                
            </div>
        </article>

        <div id="container">
            <p id="hour-label" class="label">Heure</p>
            <p id="min-label" class="label">Minutes</p>
            <p id="sec-label" class="label">Secondes</p>
            <input id="hour" type="number" max="99" min="0" value="0" class="time">
            <p id="p1" class="semicolon">:</p>
            <input id="minute" type="number" max="60" min="0" value="0" class="time">
            <p id="p2" class="semicolon">:</p>
            <input id="sec" type="number" max="60" min="0" value="0" class="time">
            <button id="starting" class="btn">Start</button>
            <button id="reseting" class="btn">Reset</button>
        </div>

        <article>
            <h1 id="alarme"></h1>
            <input id="reveil" name="alarmTime" type="datetime-local">
            <input id="messAlarm" type="text">
            <div class="control">
                <button id="buttonSetAlarm">Set l'alarm</button>
                <button id="buttonClearAlarm">Clear alarm</button>
            </div>
        </article>
    </main>
</body>
</html>



