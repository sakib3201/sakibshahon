var card = document.getElementById('Activator');
var t1 = gsap.timeline({defaults :{ease: "power2.inOut"}});

var toggle = false;
t1.to('.custom-icon-menu',{
  background: '#805ad5',
  'borderRadius' : '5em 0 0 5em'
});

t1.to('nav',{
  'clipPath' : 'ellipse(100% 100% at 50% 50%)'
},"-=.5");
t1.to('nav i',{
  opacity: 1,
  transform: 'translateX(0)',
  stagger: .05
},"-=.5");
t1.pause();

card.addEventListener('click',()=>{
  toggle = !toggle;
  if (toggle ? t1.play() : t1.reverse());
});
