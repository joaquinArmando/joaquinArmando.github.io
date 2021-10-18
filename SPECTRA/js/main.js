

const app=document.getElementById('typewrite');
const typewriter=new Typewriter(app,{
    loop:true,
    delay:75
});
typewriter
.typeString('OFRECEMOS LOS SIGUIENTES SERVICIOS')
.pauseFor(200)
.start();








