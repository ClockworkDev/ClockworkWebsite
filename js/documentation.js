window.addEventListener("load", function () {
    if (window.location.hash) {
        if (window.location.hash[0] == "#") {
            loadDocumentationPage(window.location.hash.slice(1));
        } else {
            loadDocumentationPage(window.location.hash);
        }
    } else {
        loadDocumentationPage("projectStructure");
    }
});

window.addEventListener("hashchange", function () {
    if (window.location.hash) {
        if (window.location.hash[0] == "#") {
            reloadDocumentationPage(window.location.hash.slice(1));
        } else {
            reloadDocumentationPage(window.location.hash);
        }
    } else {
        reloadDocumentationPage("projectStructure");
    }
});



function loadDocumentationPage(page) {
    window.history.pushState(null, "Clockwork documentation", "/documentation.html#" + page);
    if (window.location.hash) {
        if (window.location.hash[0] == "#") {
            reloadDocumentationPage(window.location.hash.slice(1));
        } else {
            reloadDocumentationPage(window.location.hash);
        }
    } else {
        reloadDocumentationPage("projectStructure");
    }
}

function reloadDocumentationPage(page) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', "documentation/" + page + ".html");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("documentationContent").innerHTML = xhr.responseText;
                PR.prettyPrint();
            } else {
            }
        }
    };
    xhr.send(null);
}