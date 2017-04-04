window.addEventListener("load", function(){
    if(window.location.hash){
        if(window.location.hash[0]="#"){
            loadDocumentationPage(window.location.hash.slice(1));
        }else{
            loadDocumentationPage(window.location.hash);
        }
    }else{
        loadDocumentationPage("projectStructure");
    }
});

function loadDocumentationPage(page) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', "documentation/" + page + ".html");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                window.location.hash = page;
                document.getElementById("documentationContent").innerHTML = xhr.responseText;
                PR.prettyPrint();
            } else {
            }
        }
    };
    xhr.send(null);
}