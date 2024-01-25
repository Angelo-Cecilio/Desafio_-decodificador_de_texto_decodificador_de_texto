var dictionary = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var outputText = "";
    var found = false;
    for (var i = 0; i < inputText.length; i++) {
        if (dictionary[inputText[i]]) {
            outputText += dictionary[inputText[i]];
            found = true;
        } else {
            outputText += inputText[i];
        }
    }
    if (!found) {
        outputText = "Nenhuma mensagem encontrada";
    }
    document.getElementById('outputText').value = outputText;
}

function decrypt() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText;
    var found = false;
    var sortedKeys = Object.keys(dictionary).sort(function(a, b){return dictionary[b].length - dictionary[a].length});
    for (var i = 0; i < sortedKeys.length; i++) {
        var re = new RegExp(dictionary[sortedKeys[i]], 'g');
        if (inputText.match(re)) {
            found = true;
        }
        outputText = outputText.replace(re, sortedKeys[i]);
    }
    if (!found) {
        outputText = "Nenhuma mensagem encontrada";
    }
    document.getElementById('outputText').value = outputText;
}

function copyToClipboard() {
    var outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}

