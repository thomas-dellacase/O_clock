<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1> O_Clock controle le temps </h1>
    </header>
    <main>
        <article id="Horloge" class="art">
                <h1>Horloge</h1>
                <h2 id="time"></h2>
        </article>
        <article>
            <h1>Minuteur</h1>
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
        </article>
        <article class="art">
            <h1>Alarme</h1>
            <h2 id="alarme"></h2>
            <input id="reveil" name="alarmTime" type="datetime-local">
            <input id="messAlarm" type="text" placeholder="Message d'alarme">
            <div class="control">
                <button id="buttonSetAlarm">Set l'alarm</button>
                <button id="buttonClearAlarm">Clear alarm</button>
            </div>
            <div id=alarmConteiner>
              <div id=alarming>
              </div>
            </div>
        </article>
        <article id="Chrono" class="art">
            <h1>Chronometre</h1>
            <h2 id="h1"><time></time></h2>
            <button class="chrono" id="start">start</button>
            <button class="chrono" id="stop">stop</button>
            <button class="chrono" id="reset">reset</button>
            <button class="chrono" id="tours">tours</button>
            <div id='lapconteiner'>
                <h1>Tours</h1>
                <div id="lap">
                </div>
            </div>
        </article>
    </main>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Thomas Dellacase <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">C</a></li>
              <li><a href="#">UI Design</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Java</a></li>
              <li><a href="#">Android</a></li>
              <li><a href="#">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</body>
</html>



