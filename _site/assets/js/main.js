window.onload = function () {
    enableCopyClipboardForCodeBlocks();
}


function enableCopyClipboardForCodeBlocks() {
    const code = document.querySelector('pre.highlight')
    code.addEventListener('click', (ev) => {
        setClipboard(ev.target.innerText)
    })
}

function setClipboard(value) {
    const tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
