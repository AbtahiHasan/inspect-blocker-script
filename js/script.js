    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })
    document.onkeydown = (e) => {
        console.log(e);
        if(e.keyCode === 123) {
            return false;
        }
        if(e.altKey && e.ctrlKey && e.keyCode === "I".charCodeAt(0)) {
            return false;
        }
        if(e.altKey && e.ctrlKey && e.keyCode === "C".charCodeAt(0)) {
            return false;
        }
        if(e.altKey && e.ctrlKey && e.keyCode === "J".charCodeAt(0)) {
            return false;
        }
        if(e.altKey && e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
            return false;
        }
    }
