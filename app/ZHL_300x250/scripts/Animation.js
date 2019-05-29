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

    var logo = document.getElementById('logo');
    var cta = document.getElementById('cta');

    var curtain = document.getElementById('curtain');

    var banner = document.getElementById('banner');
    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {

        t.set(banner, {opacity: 1});
        t.set(cta, {transformOrigin: "50% 75%"});

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

            .to(txt1a, .5, {opacity:0}, "+=1.5")
            .to(txt1b, .5, {opacity:0}, "-=.5")
            .to(txt1c, .5, {opacity:0}, "-=.5")

            .from(txt2a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt2b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt2c, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt2a, .5, {opacity:0}, "+=1.5")
            .to(txt2b, .5, {opacity:0}, "-=.5")
            .to(txt2c, .5, {opacity:0}, "-=.5")

            .from(curtain, .75, {opacity:0}, "+=.5")
            .from(logo, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.25")
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