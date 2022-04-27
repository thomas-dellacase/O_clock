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
                <p id="time"></p>
        </article>

        <article id="Chrono">
            <h1 id="h1"><time></time></h1>
            <button id="start">start</button>
            <button id="stop">stop</button>
            <button id="reset">reset</button>
            <button id="tours">tours</button>
            <h2>Tours</h2>
            <p id="lap"></p>
        </article>
<!-- 
        <article id="timero">
            <p id='timer'></p>
            <button id="add">Ajouté</button>
            <button id="remove">Suprimé</button>            
            <button id="starting">start</button>
            <button id="remet">reset</button>
        </article> -->

        <div id="container">
            <p id="hour-label" class="label">Heure</p>
            <p id="minute-label" class="label">Minutes</p>
            <p id="sec-label" class="label">Secondes</p>
            <input id="hour" type="number" max="99" min="0" value="0" class="time">
            <p id="p1" class="semicolon">:</p>
            <input id="minute" type="number" max="60" min="0" value="0" class="time">
            <p id="p2" class="semicolon">:</p>
            <input id="sec" type="number" max="60" min="0" value="0" class="time">
            <button id="starting" class="btn">Start</button>
            <button id="reseting" class="btn">Reset</button>
        </div>
    </main>
</body>
</html>



