var des = document.querySelectorAll(".des");
var reroll = document.querySelector(".reroll");
var first_throw = 0;
var selected = 0;
for (i = 0; i < des.length; i++) {
    des[i].touched = false;
}

function generate(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function touching() {
    des[i].x = generate(1, 9);
    des[i].y = generate(1, 9);
    des[i].number = generate(1, 6);
    console.log(des[i].y, des[i].x, i)
    for (j = 0; j < i; j++) {
        if ((des[i].x == des[j].x) && (des[i].y == des[j].y)) {
            touching();
        }
    }
}

for (i = 0; i < des.length; i++) {
    des[i].addEventListener('click', function() {
        selected++;
        var clicked = this.getAttribute("data-id");
        des[clicked].touched = true;
        des[clicked].style.transform = 'translate(' + selected * 50 + 'px, 0)';
    });
}

reroll.addEventListener('click', function() {
    for (i = 0; i < des.length; i++) {
        if (des[i].touched == false) {
            des[i].style.transform = 'translate(100px, -50px)';
        }
    }

    window.setTimeout(function() {
        for (i = 0; i < des.length; i++) {
            if (des[i].touched == false) {
                touching();
                des[i].style.transform = 'translate(' + des[i].x * 50 + 'px,' + des[i].y * 50 + 'px)';
                des[i].innerHTML = des[i].number;
            }
        }
    }, first_throw)

    first_throw = 1000;
});
