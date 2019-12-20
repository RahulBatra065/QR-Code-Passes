var prevScrollpos = 0;
var navItems = document.querySelectorAll(".transparent-light .nav-item");
var icons = document.querySelector(".icons");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
        if (currentScrollPos != 0) {
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].style.color = "#242424";
            }
            document.querySelector(".cross").style.color = "#242424";
            document.querySelector(".navbar").style.backgroundColor = "#fff";
        } else {
            for (var i = 0; i < navItems.length; i++) {
                navItems[i].style.color = "#fff";
            }
            document.querySelector(".transparent-light .cross").style.color = "#fff";
            document.querySelector(".navbar").style.backgroundColor = "transparent";
        }
    } else {
        document.querySelector(".navbar").style.top = "-72px";
    }

    prevScrollpos = currentScrollPos;
}

let navbarExpand = () => {
    document.querySelector(".cross").classList.toggle("show");
    document.querySelector(".icons").classList.toggle("show");
    document.querySelector(".links").classList.toggle("show");
    if (icons.classList.contains("show")) {
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "#242424";
        }
        document.querySelector(".transparent-light .cross").style.color = "#242424";
    } else {
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].style.color = "#fff";
        }
        document.querySelector(".transparent-light .cross").style.color = "#fff";
    }
}
let time = () => {
    var d = Date();
    A = d.toString()
    document.getElementById("time").value = A;
    document.getElementById("payment").value = "No as of " + A;
    setTimeout(time, 500);
}
time();
particlesJS.load('particles-js',
    function() {
        console.log('')
    })
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.45,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 35,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;
console.log('  _____       _           _   ____        _             ');
console.log(' |  __ |     | |         | | |  _ |      | |            ');
console.log(' | |__) |__ _| |__  _   _| | | |_) | __ _| |_ _ __ __ _ ');
console.log(' |  _  // _` | |_ || | | | | |  _ < / _` | __| |__/ _` |');
console.log(' | | | | (_| | | | | |_| | | | |_) | (_| | |_| | | (_| |');
console.log(' |_|  |_|__,_|_| |_||__,_|_| |____/ |__,_||__|_|  |__,_|');
console.log('                                                        ');
console.log('Developed and Maintained by Rahul Batra');
console.log('Rahul Batra 2019 // rahulbatra.in')
console.log('All Rights Reserved Equilibria Organisers and the Creative Team');