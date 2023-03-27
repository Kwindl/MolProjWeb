@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
html {
box-sizing: border-box;
font-size: 10px;
background-color: #f3e6e8;
background-image: linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%);
}
*, *:before, *:after {
box-sizing: inherit;
}
body {
padding: 0;
margin: 0;
font-family: 'Shadows Into Light', cursive;
}
.start{
text-align: center;
}
h1 {
text-align: center;
font-size: 5rem;
margin-bottom: 0;
}
.score {
color: rgb(104, 94, 114);
margin-top: 0%;
}
.game {
width: 800px;
height: 400px;
display: flex;
flex-wrap: wrap;
margin: 0 auto;
}
.hole {
flex: 1 0 33.33%;
overflow: hidden;
position: relative;
}
.hole:after {
display: block;
background: url(dirt.svg) bottom center no-repeat;
background-size: contain;
content: '';
width: 100%;
height:70px;
position: absolute;
z-index: 2;
bottom: -30px;
}
.mole {
background: url('mole.svg') bottom center no-repeat;
background-size: 50%;
position: absolute;
top: 100%;
width: 100%;
height: 100%;
transition:all 0.4s ease;
}
.hole.up .mole {
top: 0;
}
button{
background: rgba(190, 19, 19, 0.2);
border: red;
font-size: 3rem;
cursor: pointer;
}
