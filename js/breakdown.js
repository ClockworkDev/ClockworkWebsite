var pages = [
    { component: "The Clockwork Platform", connector: " works like ", clockPart: "A CLOCK", description: "Here you have an overview of its diferents parts so you can better understand how it works." },
    { component: "ClockworkCore", connector: " is the ", clockPart: "CLOCKWORK MOTOR", description: "Found inside every game, it is responsible for providing the core functionality that it needs to run." },
    { component: "Components", connector: " are the ", clockPart: "GEARS", description: "Writen by you or downloaded from the Clockwork Package Manager, they define how the element in your game will behave." },
    { component: "ClockworkRuntime", connector: " is the ", clockPart: "CASE", description: "It holds all the pieces of your game inside and provides an external interface so it can be put anywhere." },
    { component: "Rendering libraries", connector: " are the ", clockPart: "FACES", description: "They are responsible for displaying your game to the user, the default one is Spritesheet.js but it can be easily swapped." },
    { component: "Packaged app", connector: " is the ", clockPart: "WRISTBAND", description: "It allows you to carry your game everywhere easily, and there are many options depending on your platform of choice." },
    { component: "Clockwork CLI Tools & Clockwork extension", connector: " are the ", clockPart: "TWEEZERS", description: "Every job is easier when you have the right tools, and the NPM clockwork-tools package and the Clockwork VS Code extension are built to make you productive like a boss!" },
];

window.addEventListener('scroll', processScroll);

window.addEventListener('load', processScroll);

function processScroll() {
    var currentPage = Math.floor(0.3 + window.pageYOffset / window.innerHeight);
    var content = pages[currentPage];
    document.getElementById("breakdownTextComponent").innerHTML = content.component;
    document.getElementById("breakdownTextClockPart").innerHTML = content.clockPart;
    document.getElementById("breakdownTextDescription").innerHTML = content.description;
    document.getElementById("breakdownTextConnector").innerHTML = content.connector;
    for (var i = 0; i < pages.length; i++) {
        if (document.getElementById("breakdownImage" + i)) {
            if (currentPage >= i) {
                if (!document.getElementById("breakdownImage" + i).classList.contains("breakdownImageVisible")) {
                    void document.getElementById("breakdownImage" + i).offsetWidth;//Trigger reflow to reset animation
                    document.getElementById("breakdownImage" + i).classList.add("breakdownImageVisible");
                }
            } else {
                if (document.getElementById("breakdownImage" + i).classList.contains("breakdownImageVisible")) {
                    document.getElementById("breakdownImage" + i).classList.remove("breakdownImageVisible");
                }
            }
        }
    }
}