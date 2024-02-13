# HTML
```html
<!DOCTYPE HTML>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<head>
  <title> /* jomer page */ </title>
  <link href="style.css" rel="stylesheet">
  <script type="text/javascript" src="/js/numberGenerator.js"></script>
  <script type="text/javascript" src="/js/button.js"></script>
</head>
<body>
  <!-- title -->
  <h1> // FUNNY WEBSITE :) </h1>
  <!-- title -->
  
  <br>
  <div class="coolBackground">
  <div class="windowsThingy"> <img src="/images/taskbarThing.png"> </div>
  <!-- main text -->
  <div class= "mainText">
  <p>Hello there! My name is Jude (jomer/mojer). I am an active coding-language learner, trying to persue video game development, web development, and/or cyber security. Im also into electronics such as gaming computers, custom mechanical keyboards, and virtual/augmented reality.<i>//just trying to live life the best i can O_o </i> Other than these, these are some activities that i like to do in my free time:
    <br>
    <br><b>-playing video games</b> <i>//(rhythm games [osu!], MMORPGS [FFXIV], JRPGS [Genshin Impact])</i>
    <br><b>-watcing anime</b> <i>//(SAO, Mushoku Tensei, Kimetsu No Yaiba)</i>
    <br><b>-volleyball</b> <i>//(fav position: setter OR outside hitter)</i>
    <br><b>-listening to music</b> <i>//(Camellia [crystallized], Eve [Fight Song], TUYU [Compared Child])</i>
    <br><b>-creating art</b> <i>//(pixle art, text art)</i>
  </p>
  </div>
  <!-- main text -->
  
  <!-- code for left button -->
  <button class="buttonLeft" onclick="toggleTextLeft()"> &lt;LANGUAGES&gt; </button>&nbsp;
  <!-- code for left button -->

  <!-- text for left side -->
  <div class= "hiddenTextLeft">
    <h2 id='hiddenLeftOne' class='hiddenLeftOne'> LANGUAGES I LEARNED </h2>
    <ul id='hiddenLeftTwo' class='hiddenLeftTwo'>
      <li> c++ </li>
      <li> python(ish) </li>
      <li> HTML/CSS </li>
      <li> javascript </li>
    </ul>
  </div>
  <!-- text for left side -->
  
  <!-- code for text art in the middle -->
  <div class="textArt">
    <p>&nbsp;&nbsp;.-----------------------------.
    <br>&nbsp;/&nbsp;✧ W E L C O M E ✧&nbsp;/
    <br>'-----------------------------'&nbsp;&nbsp;
    <br>.--------------.
    <br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    <br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    <br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    <br>|&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    <br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    <br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    <br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    <br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
    </p>
  </div>
  <!-- code for text art in the middle -->
  
  <!-- code for right button -->
  <button class="buttonRight" onclick="toggleTextRight()">&lt;SOCIAL&gt;</button>
  <!-- code for right button -->
  
  <!-- text for right side -->
  <div class= "hiddenTextRight">
    <h2 id='hiddenRightOne' class='hiddenRightOne'> MY MAIN SOCIALS</h2>
    <ul id='hiddenRightTwo' class='hiddenRightTwo'>
      <li> INSTA: <a href="https://www.instagram.com/xjomerx/">xjomerx</a></li>
      <li> DISCORD: jomer.</li>
    </ul>
  </div>
  <!-- text for right side -->

  <div class="mainText" style="margin-top: 35%">
    <!-- <button onclick="randomNumber()"> BUTTON HERE FOR TESTING</button>
    <p id="numberGenerator">NUMBER HERE</p> -->
    <p> Trying to create a program at the bottom here but im not to sure how to, so yeah momment and i prage that I can actualy learn how to do it correctly.</p>
    <p> Here was what i was planning to put here:</p>
    <ul>
      <li> Went to linux expo : Scale20x <i>//fun moments there</i></li>
      <li> Participating in SekaiCTF 2023 with Julsiet, Dyson, typhon <i>//Friends who i would never forget &lt;3 </i></li>
      <li> Active member in CSHS <i>//Computer Science Honors Society</i></li>
      <li> Active member in VHTPA Robotics <i>//Vice President 2023-2024</i></li>
    </ul>
  </div>
</body>
</div>
</html>
```
#CSS
```css
@font-face {
  font-family: 'pixelFont';
  src: url("../fonts/VCR_OSD_MONO_1.001.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Daydream';
  src: url("../fonts/Daydream.ttf") format('truetype');
  font-weight: Extra Light;
  font-style: normal;
}

@font-face {
  font-family: 'nintendoFont';
  src: url("../fonts/Nintendo-DS-BIOS.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  background: #001710;
  background-image: url("/images/imageBackground.png");
  background-size: 100%;
}

.coolBackground {
  display: inline-block;
  position: absolute;
  background: #1c362e;
  /* lmao dont worry about this */
  border-top: 4vw solid #0a211a;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  /* lmao dont worry about this */
  border-radius: 8px;
  margin-left: 19%;
  margin-right: 19%;
  margin-top: 3%;
}

h1 {
  /* color, text style*/
  color: #FAF9F6;
  background: #013324;
  padding: 22px 22px;
  border-radius: 8px;
  font-size:  3.5vw;
  font-family: 'Daydream';

  /* positioning */
  margin-left: 19%;
  margin-right: 19%;
  margin-top: 3%;
}

h2 {
  color: #FAF9F6;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  font-size: 1.7vw;
  font-family: 'pixelFont';
}

i {
  color: #878787;
}

b {
  color: #FAF9F6;
}

a {
  color: #2de3ac;
}

.mainText {
  color: #e0e0e0;
  font-size: 28px;
  font-family: 'nintendoFont';
  margin-bottom: 15px;
  margin-left: 3%;
  margin-right: 3%;
  text-indent: 7px;
}

.hiddenRightOne{
  display: none;
}

.hiddenRightTwo{
  display: none;
}

.hiddenLeftOne{
  display: none;
}

.hiddenLeftTwo{
  display: none;
}

.hiddenTextLeft{
  /* text, font, and color */
  font-size: 1.6vw;
  text-align: left;
  text-decornation: none;
  color: #ffffff;
  background-color: #292929;
  font-family: 'nintendoFont';
  outline: none;
  text-indent: 3px;
  
  /* shape of text */
  border: none;
  border-radius: 5px;
  width: 25%;
  
  /* position */
  margin-top: 9%;
  margin-left: 3%;
  position: absolute;
}

.hiddenTextRight{
  /* text, font, and color */
  font-size: 1.6vw;
  text-align: left;
  background-color: #292929;
  color: #ffffff;
  font-family: 'nintendoFont';
  outline: none;
  text-indent: 3px;
  
  /* shape of text */
  border: none;
  border-radius: 5px;
  width: 25%;
  
  /* position */
  margin-top: 9%;
  margin-left: 72%;
  position: absolute;
}

.buttonLeft {
  /* shape of button */
  display: inline-block;
  padding: 21px 25px;
  font-size: 1.7vw;
  cursor: pointer;
  
   /* text, font, and color */
  font-family: 'nintendoFont';
  text-align: center;
  text-decoration: none;
  outline: 1px solid white;
  color: #ffffff;
  background-color: #474747;
  
  /* shape of button */
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #262626;
  width: 25%;
  
  /* position */
  margin-left: 3%;
  margin-bottom: 20px;
  position: absolute;
}

.buttonRight {
  /* shape of button */
  display: inline-block;
  padding: 21px 25px;
  font-size: 1.7vw;
  cursor: pointer;
  
  /* text, font, and color */
  font-family: 'nintendoFont';
  text-align: center;
  text-decoration: none;
  outline: 1px solid white;
  color: #ffffff;
  background-color: #474747;
  
  /* shape of button */
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #262626;
  width: 25%;
  
  /* position */
  margin-left: 71.5%;
  margin-bottom: 20px;
  position: absolute;
}

.textArt {
  /* text, font, and color */
  font-size: 1.3vw;
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
  font-family: Arial;
  text-decoration: none;
  outline: none;
  color: #a3a3a3;
  background-color: #292929;

  /* shape of area */
  border: none;
  border-radius: 5px;
  width: 35%;
  
  /* position */
  margin-left: 30.8%;
  margin-right: 50%;
  margin-bottom: 20px;
  position: absolute;
}

.windowsThingy, img{
  position: absolute; 
  width: 10vw; 
  margin-top: -1.7vw;
  margin-left: 0.5vw;
}
  
```
