

gsap.from('#nav', {
            duration: 1.2,
            y: '-10px',
            stagger: 2,
            opacity: 0,
            delay: 1
        }, 'a')
        gsap.from('.txt', {
            duration: 1.2,
            y: '-10px',
            stagger: 2,
            opacity: 0,
            delay: 1
        }, 'a')

        Shery.mouseFollower({
            //Parameters are optional.
            skew: true,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
        });
        Shery.imageEffect("img", {
             debug:true,
             style:4,
                "a": {
                    "value": 2,
                    "range": [0, 30]
                },
                "b": {
                    "value": -1,
                    "range": [-1, 1]
                },
                "zindex": {
                    "value": -9996999,
                    "range": [-9999999, 9999999]
                },
                "aspect": {
                    "value": 0.9233796861436632
                },
                "gooey": {
                    "value": false
                },
                "infiniteGooey": {
                    "value": false
                },
                "growSize": {
                    "value": 4,
                    "range": [1, 15]
                },
                "durationOut": {
                    "value": 1,
                    "range": [0.1, 5]
                },
                "durationIn": {
                    "value": 1.5,
                    "range": [0.1, 5]
                },
                "displaceAmount": {
                    "value": 0.5
                },
                "masker": {
                    "value": true
                },
                "maskVal": {
                    "value": 5,
                    "range": [1, 5]
                },
                "scrollType": {
                    "value": 0
                },
                "geoVertex": {
                    "range": [1, 64],
                    "value": 1
                },
                "noEffectGooey": {
                    "value": true
                },
                "onMouse": {
                    "value": 1
                },
                "noise_speed": {
                    "value": 0.2,
                    "range": [0, 10]
                },
                "metaball": {
                    "value": 0.2,
                    "range": [0, 2]
                },
                "discard_threshold": {
                    "value": 0.5,
                    "range": [0, 1]
                },
                "antialias_threshold": {
                    "value": 0.002,
                    "range": [0, 0.1]
                },
                "noise_height": {
                    "value": 0.5,
                    "range": [0, 2]
                },
                "noise_scale": {
                    "value": 10,
                    "range": [0, 100]
                }
            }

        )
        Shery.textAnimate(".txt" /* Element to target.*/ , {
            //Parameters are optional.
            style: 1,
            y: 10,
            delay: 0.1,
            duration: 2,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            multiplier: 0.1,
        });
        gsap.from('#footer',{
            opacity:0,
            y:'200px',
            stagger:3,
            duration:1.5,
            
        })