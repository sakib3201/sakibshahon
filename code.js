//code for cursor will go here





//Code for navbar
        var card = document.getElementById('Activator');
        var tl = gsap.timeline({
          defaults: {
            ease: "power2.inOut"
          }
        })

        var toggle = false;

        tl.to('.custom-icon-menu', {
          background: 'tomato', //'#3cc1c9ff' #805ad5
          'borderRadius': '5em 0 0 5em'
        });
        tl.to('nav', {
          'clipPath': 'ellipse(100% 100% at 50% 50%)'
        }, "-=.5")
        tl.to('nav i', {
          opacity: 1,
          transform: 'translateX(0)',
          stagger: .05
        }, "-=.5")
        tl.pause();

        card.addEventListener('click', () => {
          toggle = !toggle;
          if (toggle ? tl.play() : tl.reverse());

        })
