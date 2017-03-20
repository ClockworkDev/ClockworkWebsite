//Taglines loop
var startTaglines = (function () {
    var taglines = ["The game engine that doesn’t [grind] your gears",
        "[Gear] up your game with Clockwork",
        "It is [time] for a better way to develop games",
        "A gamedev platform ahead of its [time]",
        "A helping [hand] for your gamedev needs",
        "[Dial] in for better gamedev tooling",
        "Helping you [face] your gamedev challenges",
        "A game engine that [chimes] with JavaScript",
        "[Spring] into action with Clockwork",
        "Let your games run like [clockwork]"];
    taglines.sort(function () { return 0.5 - Math.random(); });

    var currentTagline;
    var currentTaglineIndex = 0;
    var currentCharIndex;

    var div;

    var charWriteTime = 50;
    var charRemoveTime = 20;

    function formatString(input) {
        var output;
        if (input.indexOf("[") != -1) {
            if (input.indexOf("]") != -1) {
                output = input.replace("[", '<div class="bold">');
                output = output.replace("]", '</div>');
            } else {
                output = input.replace("[", '<div class="bold">');
                output += '</div>';
            }
        } else {
            output = input;
        }
        return ">" + output;
    }

    function printChar() {
        if (currentCharIndex > currentTagline.length) {
            setTimeout(removeChar, 500);
        } else {
            div.innerHTML = formatString(currentTagline.slice(0, currentCharIndex++));
            if (currentCharIndex % 2 == 0) {
                div.innerHTML += "░";
            }
            setTimeout(printChar, charWriteTime);
        }
    }

    function removeChar() {
        if (currentCharIndex >= 0) {
            div.innerHTML = formatString(currentTagline.slice(0, currentCharIndex--));
            setTimeout(removeChar, charRemoveTime);
        } else {
            loadNewTagline();
        }
    }

    function loadNewTagline() {
        if (!div) {
            div = document.getElementById("tagline");
        }
        currentTagline = taglines[currentTaglineIndex];
        currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
        currentCharIndex = 0;
        setTimeout(printChar, charWriteTime);
    }

    return loadNewTagline;
})();

window.addEventListener("load", function () {
    startTaglines();
});

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