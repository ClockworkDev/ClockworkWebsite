window.addEventListener('scroll', function () {
    if (window.pageYOffset - window.innerHeight * 0.8 > -200) {
        document.getElementById("splashPage").classList.add("fixedHeader");
    }

    if (window.pageYOffset - window.innerHeight * 0.8 < -200) {
        document.getElementById("splashPage").classList.remove("fixedHeader");
    }

    [].forEach.call(document.getElementsByClassName("feature"),function (x) {
        if (x.getBoundingClientRect().top < window.innerHeight*0.8) {
            x.classList.add("visibleFeature");
        }else{
            // x.classList.remove("visibleFeature");
        }
    });
});