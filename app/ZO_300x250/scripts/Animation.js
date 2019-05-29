var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();


    var txt1a = document.getElementById('txt1a');
    var txt1b = document.getElementById('txt1b');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');
    var txt4 = document.getElementById('txt4');
    var txt5 = document.getElementById('txt5');
    var txt6 = document.getElementById('txt6');

    var logo = document.getElementById('logo');
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
        // t.to(cloud, 10, {x: "+=20", ease: Linear.easeNone});

        tl1.from(txt1a, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt1b, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt1a, .5, {opacity: 0}, "+=1.5")
            .to(txt1b, .5, {opacity: 0}, "-=.5")

            .from(txt2, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})
            .from(txt3, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt3, .5, {opacity: 0}, "+=1.5")

            .from(txt4, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .to(txt4, .5, {opacity: 0}, "+=1.5")

            .from(txt5, .5, {y: "-=10", opacity: 0, ease: Sine.easeInOut})

            .from(curtain, .75, {opacity: 0}, "+=1.5")

            .from(logo, 1.5, {y: "-=20", opacity: 0, ease: Sine.easeInOut})

            .from(txt6, 1, {y: "-=10", ease: Sine.easeInOut}, "-=1")
            .from(txt6, .5, {opacity:0, ease: Sine.easeInOut},"-=.75")

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