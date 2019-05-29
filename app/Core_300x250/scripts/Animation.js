var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();


    var cloud = document.getElementById('cloud');

    var txt1a = document.getElementById('txt1a');
    var txt1b = document.getElementById('txt1b');
    var txt1c = document.getElementById('txt1c');

    var txt2a = document.getElementById('txt2a');
    var txt2b = document.getElementById('txt2b');
    var txt2c = document.getElementById('txt2c');

    var house = document.getElementById('house');

    var z = document.getElementById('z');
    var i = document.getElementById('i');
    var l1 = document.getElementById('l1');
    var l2 = document.getElementById('l2');
    var o = document.getElementById('o');
    var w = document.getElementById('w');

    var tagline = document.getElementById('tagline');

    var cta = document.getElementById('cta');

    var curtain = document.getElementById('curtain');

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

        t.to(cloud, 10, {x: "+=20", ease: Linear.easeNone});

        tl1.from(txt1a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt1b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt1c, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt1a, .5, {opacity: 0}, "+=1.5")
            .to(txt1b, .5, {opacity: 0}, "-=.5")
            .to(txt1c, .5, {opacity: 0}, "-=.5")

            .from(txt2a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt2b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt2c, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt2a, .5, {opacity: 0}, "+=1.5")
            .to(txt2b, .5, {opacity: 0}, "-=.5")
            .to(txt2c, .5, {opacity: 0}, "-=.5")

            .from(curtain, .75, {opacity: 0})

            .from(house, .5, {opacity: 0, ease: Sine.easeInOut})

            .from(z, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
            .from(i, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
            .from(l1, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
            .from(l2, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
            .from(o, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
            .from(w, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")

            .from(tagline, 1, {y: "-=10", ease: Sine.easeInOut}, "-=1")
            .from(tagline, .8, {opacity: 0, ease: Sine.easeInOut}, "-=.8")

            .from(cta, 1, {scale: 0, opacity: 0, ease: Elastic.easeInOut}, "-=.25");

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