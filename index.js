function logoAnimationSlide() {
    $('nav').ready(function() {
        $('svg').slideDown("slow");
    });
};



function handleAnimation() {
    logoAnimationSlide();
}


$(handleAnimation);