$(function() {

        // wow js
        new WOW().init();
        // wow js
        // typed
        $(".typed").typed({
            strings: ["I AM WEB DESIGNER"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1000,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 1000,
            // loop
            loop: true,
            // false = infinite
            loopCount: Infinity,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
        // typed


        // progessbar

        //number
        $(function() {
            let number = document.getElementById("number");
            let counter = 0;
            setInterval(() => {
                if (counter == 60) {
                    clearInterval();
                } else {
                    counter += 1;
                    number.innerHTML = counter + "%";
                }

            }, 10);
        })

        // number

        //number
        $(function() {
            let number_to = document.getElementById("number_to");
            let counter = 0;
            setInterval(() => {
                if (counter == 60) {
                    clearInterval();
                } else {
                    counter += 1;
                    number_to.innerHTML = counter + "%";
                }

            }, 30);
        })

        // number

        //number_to
        $(function() {
            let number_to = document.getElementById("number_to");
            let counter = 0;
            setInterval(() => {
                if (counter == 60) {
                    clearInterval();
                } else {
                    counter += 1;
                    number_to.innerHTML = counter + "%";
                }

            }, 30);
        })

        // number_to

        //number_th
        $(function() {
            let number_th = document.getElementById("number_th");
            let counter = 0;
            setInterval(() => {
                if (counter == 40) {
                    clearInterval();
                } else {
                    counter += 1;
                    number_th.innerHTML = counter + "%";
                }

            }, 30);
        })

        // number_th

        //number_fr
        $(function() {
            let number_fr = document.getElementById("number_fr");
            let counter = 0;
            setInterval(() => {
                if (counter == 50) {
                    clearInterval();
                } else {
                    counter += 1;
                    number_fr.innerHTML = counter + "%";
                }

            }, 30);
        })

        // number_fr
        // progessbar
    })
    // preloade
$(window).load(function() {
        $(".preloader").delay(5000).fadeOut(50);
    })
    //     // preloade
    // Example starter JavaScript for disabling form submissions if there are invalid fields