setup_C();
/** THEME: SERENITY  - Skyla, Diana, Kerven */
function setup_C() {
  console.log("in c");
  /**************************************************** */
  //get the buttons
  activateButtons(`#Canvas`, "ani_canv",aniA,aniB,aniC,aniD);

function aniA(parentCanvas) {

  const container = document.querySelector("#ani_canv_A");
  document.querySelector("h5").innerHTML = "<h5>“M A G I C is resistance. Magic sees unbearable realities, unbearable emotions, and makes them bearable; magic moves us toward creating impossible futures. Like the raccoon, I will do the best with what I am given. I will cast impossible spells.” – Maranda Elizabeth, “How Magic Helps Me Live with Pain and Trauma,” Medium, April 19. 2016</h5>";

  /* set scene */
  container.style.position = "relative";
  container.style.overflow = "hidden";
  container.style.background = "rgb(0,0,30)";

  // create canvas
  const canvas = document.createElement("canvas");
  canvas.classList.add("aniCanvas");
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let theta = 0;
  const num = 200;

  function map(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }

  function animate() {

    const width = canvas.width;
    const height = canvas.height;

    // clear background
    ctx.fillStyle = "rgb(0,0,30)";
    ctx.fillRect(0, 0, width, height);

    let angle = 0;
    let radius = 1;

    for (let i = 0; i < num; i++) {
      angle += 0.50;
      radius += 0.7;

      const x = width / 2 + Math.cos(angle) * radius;
      const y = height / 2 + Math.sin(angle) * radius;
  
      const size = map(
        Math.sin(theta + (Math.PI * 2 / num) * i * 4),
        -1, 1, 0, 50
      );

      const scal = 0.5 + (2 * i / num);

      const w = size * scal * 3;
      const h = size * scal;

      ctx.beginPath();
      ctx.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);

      if (i % 9 === 0) {
        ctx.fillStyle = "cornflowerblue";
        ctx.shadowColor = "rgba(255,255,255,0.8)";
      } else {
        ctx.fillStyle = "black";
        ctx.shadowColor = "rgba(255,0,255,0.6)";
      }

      ctx.shadowBlur = 10;
      ctx.fill();
    }

    theta -= 0.04;

    requestAnimationFrame(animate);
  }

  animate();
  
  //container.innerHTML = "<p>hello</p>"
}


  
  /* TAB B CODE */
  function aniB(parentCanvas) {
    document.querySelector("h5").innerHTML = "<h5>  M A G I C is a “tainted term” (alongside “superstition” and “occult”) and that these terms “were essentially reinvented during the period of the Enlightenment, in such a manner that they could serve to demarcate the ‘Other of science and rationality’” — Esotericism and the Academy (2012) </h5>";

  const container = document.querySelector("#ani_canv_B");
  const can = document.querySelector("aniCanvas");
  const sun = document.createElement("div"); 
  container.appendChild(sun)
  sun.classList.add("aniCanvas"); 

  /* set scene */
  // canvas 
  container.style.background="cornflowerblue";
  container.style.filter="brightness(150%);"

  // sun 
    let scale = 0.5; 
    sun.style.width = `0`+"px";
    sun.style.height = `10`+"px";
    sun.style.borderRadius = `50%`;
    sun.style.position=`absolute`; 
    sun.style.top=`50%`;
    sun.style.left=`50%`; 
    sun.style.transform="translate(-50%, -50%)";
    sun.style.boxShadow =
      '0 0 60px 50px #fff, ' +
      '0 0 140px 90px #0ff,' +
      '0 0 10px 30px #f0f';
    sun.style.border=`none`;
    sun.style.background="white";//`linear-gradient(rgba(${255}, ${240}, ${32}), rgba(${255}, ${85}, ${0}))`;


  // listen for mouse movement
  container.addEventListener('mousemove', function(event) {
      // get canvas
      const world = container.getBoundingClientRect(); // gets ani_canvC_B

      // get mousex, mousey, and distance from orgin 
      const mouseX = event.clientX - world.left; // left is the left pos of container. serves as point 0 for the grid
      const mouseY = event.clientY - world.top;
      const dist = getDistance(mouseX, mouseY, (container.offsetWidth/2), (container.offsetWidth/2))
      
      // live update the scene 
      scale = 2.5-dist/100; // the amount of change that happens for the distance 
      console.log(scale)
      sun.style.boxShadow =
      `0 0 ${90*scale}px ${50*scale}px #fff,` +
      `0 0 ${60*scale}px ${60*scale}px #0ff,` +
      `0 0 ${140*scale}px ${30*scale}px #f0f`;
      //sun.style.width = `${30*scale}`+"px";    

      let mappedCol = 250-(mouseY*(250/container.offsetWidth)); // maps the mouseY from 0 - 250 
      let alph = (container.offsetWidth-world.left)
      container.style.background =`linear-gradient(
      rgba(${20},${0},${30}),  
      rgba(${100},${149},${237}),  
      rgba(${20},${0},${30}) )`;//`rgba(${100},${100},${40})`;

    });

  
    /* Gets distance between x1, y1 and point x2, y2 using pythagorean theorem */
    function getDistance(x1, y1, x2, y2) { 
      
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // gets positive distance between x1, x2, & y1, y2 then finds length of hypotenues of the two to get diagonal distance 
    }
      
  }

  function aniC(parentCanvas) {
    document.querySelector("h5").innerHTML = "<h5> “I don’t want realism. I want M A G I C ! … Yes, magic! I try t give that to people. I misrepresent things to them. I don’t tell truth, I tell what ought to be truth.” — Blanche in Tennessee Williams’s A Streetcar Named Desire (1947)</h5>";


    const container = document.querySelector("#ani_canv_C");
    container.classList.add("aniCanvas"); 
    container.style.overflow="hidden"; // hides extra dots 
    container.style.background="black"

    const dotCount = 90; 
    const dots = [];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");

      dot.style.position = "absolute";
     //dot.style.width = 1 + "px";
     // dot.style.height = 1 + "px";
      dot.style.borderRadius = "50%";
      dot.style.background="rgb(247, 142, 230)"; // color of dots 
      dot.style.left = "50%";
      dot.style.top = "50%";
      dot.style.transform = "translate(-50%, -50%)";
      dot.style.opacity = "0.8";
      dot.style.boxShadow =
          `0 0 ${30}px ${30}px black,` +
          `0 0 ${30}px ${30}px black`; 
       

      container.appendChild(dot);
      dots.push(dot);
    }

    let time = 0; 
    const r = 200;

    function animate() {
      time += 0.01; // speed 

      for (let i = 0; i < dots.length; i++) {
        const angle = (i / dotCount) * Math.PI * 4;

        const x = Math.tan(-angle) * r + (container.offsetWidth / 2); // to centre it
        const y = Math.tan(-angle) * r + (container.offsetHeight / 2);

        const wave = Math.cos(angle+time*0.5); // the angle changes 
        const scale = (wave)*2;
        const factor = 0.9; 

        // position the dots 
        dots[i].style.left = x + "px";
        dots[i].style.top = y + "px";
        dots[i].style.transform =`scale(${scale*1.8})`;
        dots[i].style.boxShadow =
          `0 0 ${100*scale*factor}px ${30*scale*factor}px pink,` +
          `0 0 ${10*scale*factor}px ${30*scale*factor}px rgba(58, 255, 235, 1)`; 
       
      
      }
      requestAnimationFrame(animate);
    }

    animate();
  }






  function aniD(parentCanvas) {
     document.querySelector("h5").innerHTML = "<h5> “Any sufficiently advanced technology is indistinguishable from M A G I C.“ (Arther C. Clark, Profile of the Future: An Inquirey Into the Limits of the Possible (1962))</h5>"; 
     
    const container = document.querySelector("#ani_canv_D");
    container.classList.add("aniCanvas"); 
    container.style.overflow="hidden"; // hides extra dots 
    container.style.background="black"

    const dotCount = 90; 
    const dots = [];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");

      dot.style.position = "absolute";
     //dot.style.width = 1 + "px";
     // dot.style.height = 1 + "px";
      dot.style.borderRadius = "50%";
      dot.style.background="cornflowerblue"; // color of dots 
      dot.style.left = "50%";
      dot.style.top = "50%";
      dot.style.transform = "translate(-50%, -50%)";
      dot.style.opacity = "0.8";
      dot.style.boxShadow =
          `0 0 ${30}px ${30}px cornflowerblue,` +
          `0 0 ${30}px ${30}px rgba(229, 115, 255, 1)`; 
       

      container.appendChild(dot);
      dots.push(dot);
    }

    let time = 0; 
    const r = 100;

    function animate() {
      time += 0.02; // speed 

      for (let i = 0; i < dots.length; i++) {
        const angle = (i / dotCount) * Math.PI * 4;

        const x = Math.cos(angle) * r + (container.offsetWidth / 2); // to centre it
        const y = Math.tan(angle) * r + (container.offsetHeight / 2);

        const wave = Math.cos(angle+time*0.5); // the angle changes 
        const scale = (wave)*0.8;
        const factor = 0.9; 

        // position the dots 
        dots[i].style.left = x + "px";
        dots[i].style.top = y + "px";
        dots[i].style.transform =`scale(${scale*1.8})`;
        dots[i].style.boxShadow =
          `0 0 ${100*scale*factor}px ${30*scale*factor}px cornflowerblue,` +
          `0 0 ${10*scale*factor}px ${30*scale*factor}px rgba(229, 115, 255, 1)`; 
       
      
      }
      requestAnimationFrame(animate);
    }

    animate();
  }
}
