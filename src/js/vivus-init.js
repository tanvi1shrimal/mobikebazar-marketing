$(function(){
    new Vivus('engine__left', {start: 'autostart', type: 'delayed', duration: 200});
    new Vivus('engine__right', {start: 'autostart', type: 'delayed', duration: 200});
});

$(function () {
    TweenMax.to(".anmation-circle", 6, {
      rotation: 360,
      transformOrigin: "50% 50%",
      ease: Linear.easeNone,
      repeat: -1
    });

    TweenMax.fromTo(".shaft-anim", 1, 
        {rotation: -10}, 
        {rotation: 10,repeat: -1,yoyo: true,repeatDelay:0.5,ease: Linear.easeNone,});
    
});