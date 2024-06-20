function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();

 var cursor = document.querySelector("#cursor");

  main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
  })

  
  document.querySelector("#page7-three").addEventListener("mouseenter",function(){
    document.querySelector("#page7-three-inner").style.width = `95%`,
    document.querySelector("#page7-three").style.border = `1px solid #fff`,
    document.querySelector("#page7-three>h1").style.color = `#fff`

  })
  document.querySelector("#page7-three").addEventListener("mouseleave",function(){
    document.querySelector("#page7-three-inner").style.width = `100%`,
    document.querySelector("#page7-three").style.border = `1px solid #dadada6c`
    document.querySelector("#page7-three>h1").style.color = `#dadada6c`
  })

  document.querySelector(".center-box").addEventListener("mouseenter",function(){
    document.querySelector(".center-box").style.width = `31%`
    document.querySelector(".center-box>h1").style.color = `#dadada6c`

  })
  document.querySelector(".center-box").addEventListener("mouseleave",function(){
    document.querySelector(".center-box").style.width = `32%`
    document.querySelector(".center-box>h1").style.color = `#fff`
  })


  

  function canvas1 (){
    const canvas = document.querySelector("#center-page>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./capsule1.png
    ./capsule2.png
    ./capsule3.png
    ./capsule4.png
    ./capsule5.png
    ./capsule6.png
    ./capsule7.png
    ./capsule8.png
    ./capsule9.png
    ./capsule10.png
    ./capsule11.png
    ./capsule12.png
    ./capsule13.png
    ./capsule14.png
    ./capsule15.png
    ./capsule16.png
    ./capsule17.png
    ./capsule18.png
    ./capsule19.png
    ./capsule20.png
    ./capsule21.png
    ./capsule22.png
    ./capsule23.png
    ./capsule24.png
    ./capsule25.png
    ./capsule26.png
    ./capsule27.png
    ./capsule28.png
    ./capsule29.png
    ./capsule30.png
    ./capsule31.png
    ./capsule32.png
    ./capsule33.png
    ./capsule34.png
    ./capsule35.png
    ./capsule36.png
    ./capsule37.png
    ./capsule38.png
    ./capsule39.png
    ./capsule40.png
    ./capsule41.png
    ./capsule42.png
    ./capsule43.png
    ./capsule44.png
    ./capsule45.png
    ./capsule46.png
    ./capsule47.png
    ./capsule48.png
    ./capsule49.png
    ./capsule50.png
    ./capsule51.png
    ./capsule52.png
    ./capsule53.png
    ./capsule54.png
    ./capsule55.png
    ./capsule56.png
    ./capsule57.png
    ./capsule58.png
    ./capsule59.png
    ./capsule60.png
    ./capsule61.png
    ./capsule62.png
    ./capsule63.png
    ./capsule64.png
    ./capsule65.png
    ./capsule66.png
    ./capsule67.png
    ./capsule68.png
    ./capsule69.png
    ./capsule70.png
    ./capsule71.png
    ./capsule72.png
    ./capsule73.png
    ./capsule74.png
    ./capsule75.png
    ./capsule76.png
    ./capsule77.png
    ./capsule78.png
    ./capsule79.png
    ./capsule80.png
    ./capsule81.png
    ./capsule82.png
    ./capsule83.png
    ./capsule84.png
    ./capsule85.png
    ./capsule86.png
    ./capsule87.png
    ./capsule88.png
    ./capsule89.png
    ./capsule90.png
    ./capsule91.png
    ./capsule92.png
    ./capsule93.png
    ./capsule94.png
    ./capsule95.png
    ./capsule96.png
    ./capsule97.png
    ./capsule98.png
    ./capsule99.png
    `
    return data.split("\n")[index];
  }
  
  const frameCount = 99;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    repeat:-1,
    // yoyo:true,
    duration:4,
    scrollTrigger: {
      trigger: `#center-page`,
      start: `top 20%`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#center-page",
    scroller: `#main`,
    start: `top 20%`,
  })
  }
  canvas1()


  function canvas (){
    const canvas = document.querySelector("#page8>canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./heart1.png
    ./heart2.png
    ./heart3.png
    ./heart4.png
    ./heart5.png
    ./heart6.png
    ./heart7.png
    ./heart8.png
    ./heart9.png
    ./heart10.png
    ./heart11.png
    ./heart12.png
    ./heart13.png
    ./heart14.png
    ./heart15.png
    ./heart16.png
    ./heart17.png
    ./heart18.png
    ./heart19.png
    ./heart20.png
    ./heart21.png
    ./heart22.png
    ./heart23.png
    ./heart24.png
    ./heart25.png
    ./heart26.png
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 26;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    repeat:-1,
    // yoyo:true,
    duration:0.8,
    scrollTrigger: {
      trigger: `#page8`,
      start: `-200% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page8",
    scroller: `#main`,
    start: `-200% top`,
  })
}
canvas()


