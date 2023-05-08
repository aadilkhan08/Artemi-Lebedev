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
  
  
  function canvas (){
    const canvas = document.querySelector("canvas");
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
  
  const frameCount = 104;
  
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
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page`,
      start: `top top`,
      end: `400% top`,
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
    trigger: "#page",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `400% top`,
  })
  }
canvas()


document.querySelector(".center-box").addEventListener("click", function(){
  console.log('hello')
});