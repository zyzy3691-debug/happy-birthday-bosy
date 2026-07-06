const btn = document.getElementById("startBtn");
const count = document.getElementById("countdown");
const nameText = document.getElementById("name");
const message = document.getElementById("message");
const music = document.getElementById("music");

const text =
11/7/1999 ❤️✨
  `كل سنة وإنتِ طيبة يا بوسي 🤍
يارب تكون سنة كلها فرحة وضحكة وراحة بال،
وتحققي فيها كل اللي نفسك فيه.
فيه أشخاص وجودهم بيغيّر تفاصيل كتير من غير ما يقصدوا... وإنتِ من الناس دي.
أتمنى السنة الجديدة تليق بيكي، وتحققلك كل اللي قلبك يتمناه،
وتفضل ضحكتك السبب في إن الأيام تبقى أخف.
وجودك جميل...
وعيد ميلاد سعيد 🎂✨`;

btn.onclick = () => {

btn.style.display = "none";

let n = 3;

count.innerHTML = n;

const timer = setInterval(() => {

n--;

if(n>0){

count.innerHTML=n;

}else{

clearInterval(timer);

count.innerHTML="🎆";

nameText.style.display="block";

music.play().catch(()=>{});

typeWriter();

createHearts();

}

},1000);

};

function typeWriter(){

let i=0;

const t=setInterval(()=>{

message.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(t);

}

},45);

}

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML=Math.random()>0.5?"🤍":"🌹";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animation="fall 6s linear";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

},250);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-30px);

opacity:1;

}

100%{

transform:translateY(110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);
