---
layout: post
title:  "Add copy to clipboard function in Javascript"
date:   21-03-01 19:42:35 +0100
categories: coding
tags: javascript
---

It is pretty cool to have syntax highlighting in HTML, Markdown or whatever. 
It is much cooler to be able to copy the code block per one click


<i>The example adds a click listener to all code blocks on this blog. 
Try it out by clicking on the code blocks below</i>

Add a click listener to the HTML element you want to copy from.

```javascript
const code = document.querySelector('pre.highlight')
code.addEventListener('click', (ev) => {
    setClipboard(ev.target.innerText)
})
```

Add a copy function, to copy the value into the clipboard. 
A temporary input is needed, in order to exec the copy command.
The input will be deleted afterwards.



```javascript
   function setClipboard(value) {
    const tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
```


