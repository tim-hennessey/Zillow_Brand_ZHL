var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax({paused: true});
    var tl3 = new TimelineMax();


    var txt1a = document.getElementById('txt1a');
    var txt1b = document.getElementById('txt1b');

    var txt2a = document.getElementById('txt2a');
    var txt2b = document.getElementById('txt2b');

    var txt3a = document.getElementById('txt3a');
    var txt3b = document.getElementById('txt3b');

    var txt4a = document.getElementById('txt4a');
    var txt4b = document.getElementById('txt4b');
    var txt4c = document.getElementById('txt4c');

    var txt5a = document.getElementById('txt5a');
    var txt5b = document.getElementById('txt5b');
    var txt5c = document.getElementById('txt5c');
    var txt5d = document.getElementById('txt5d');

    // var logo = document.getElementById('logo');
    var cta = document.getElementById('cta');

    var curtain = document.getElementById('curtain');

    var flag = document.getElementById('flag');
    var sprite1 = document.getElementById('sprite1');

    var shake = document.getElementById('shake');
    var sprite2 = document.getElementById('sprite2');

    var banner = document.getElementById('banner');
    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {

        t.set(banner, {opacity: 1});
        t.set(cta, {transformOrigin: "50% 70%"});

        buttonExit.addEventListener('mouseover', function () {
            // t.to(cta_bg, .25, {backgroundColor: "rgba(211, 78, 255, 1)"});

        });
        buttonExit.addEventListener('mouseout', function () {
            // t.to(cta_bg, .25, {backgroundColor: "rgba(0, 11, 56, 1)"});

        });

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        // t.to(cloud, 10, {x: "+=20", ease: Linear.easeNone});

        tl1.from(txt1a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt1b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt1a, .5, {opacity: 0}, "+=1.5")
            .to(txt1b, .5, {opacity: 0}, "-=.5")

            .from(txt2a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt2b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt2a, .5, {opacity: 0}, "+=1.5")
            .to(txt2b, .5, {opacity: 0}, "-=.5")

            .from(txt3a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt3b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt3a, .5, {opacity: 0}, "+=1.5")
            .to(txt3b, .5, {opacity: 0}, "-=.5")

            .from(txt4a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt4b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt4c, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .from(curtain, .75, {
                opacity: 0, onComplete: function () {
                    tl2.play();
                }
            }, "+=1.5")

            .from(flag, 1.5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt5a, .75, {y: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=1")
            .from(txt5c, .75, {y: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=1")

            .from(txt5b, .75, {y: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.5")
            .from(txt5d, .75, {y: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.75")


            .from(cta, 1, {scale: 0, opacity: 0, ease: Elastic.easeInOut}, "-=.25");

        tl2.to(flag, 0.1, {display: "block"})
            .to(sprite1, 1, {x: -2047, ease: SteppedEase.config(23)});

        tl3.to(shake, 0.1, {display: "block"})
            .to(sprite2, 3, {y: -3870, ease: SteppedEase.config(18), delay:2})
            .set(sprite2, {y:0});


    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();