var app = app || {};


app.Animation = (function () {

    var tl = new TimelineMax({repeat: 1});

    var animationWindow = document.getElementById('animationWindow');

    var animData = {
        wrapper: animationWindow,
        animType: 'svg',
        loop: false,
        prerender: true,
        autoplay: true,
        path: './scripts/data.json'
    };

    var anim = bodymovin.loadAnimation(animData);


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {

        anim.setSpeed(1);
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        

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