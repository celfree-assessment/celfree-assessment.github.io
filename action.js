const sexcheck = document.getElementById("sex");

function refreshSplash() {
    let index = Math.floor(Math.random() * texts.length + 1);

    if(index == texts.length) {
        main_splash.textContent = "You didn't like the splash message I gave you?!";
        second_splash.textContent = "ungrateful bitch."
        current_splash.value = -1;
        return;
    }

    current_splash.value = index;
    applyNewSplash();
}

function fakeReload() {
    alert("just use the re-load button at the top of browser!!!\nit comes FREE!! with your browser!!!!!!!11!!1!!");
}

function applyNewSplash() {
    // WARNING: When updating the source of the HTML string, please sanitise input to prevent XSS vulnerabilities.
    main_splash.innerHTML = texts[current_splash.value][0];
    second_splash.innerHTML = texts[current_splash.value][1];
    splash_number.textContent = "Current splash is #" + (current_splash.value + 1);
}

function requestSplash() {
    spin = document.getElementById("requested_splash").value - 1;
    console.log("spin (type " + typeof spin + ") value is interpreted as " + spin + ", please verify");
    current_splash.value = parseInt(spin);
    applyNewSplash();
}

function incrementSplash(amount) {
    if(typeof amount != "number")
        throw TypeError("why the fuck do you want to increment by a " + typeof amount);

    current_splash.value += amount;
    applyNewSplash();
}

function toggleSuggestive() {
    if(localStorage.getItem("suggestive") == null) {
        if(sexcheck.checked)
            localStorage.setItem("suggestive", "no I am a virgin"); // unnecessarily long string value haha ik bad practise but fuck you
        else
            localStorage.setItem("suggestive", "yes I like r34");
    } else {
        
    }
}



main_splash.addEventListener("click", refreshSplash);
second_splash.addEventListener("click", refreshSplash);
document.getElementById("regen_splash").addEventListener("click", requestSplash);
document.getElementById("requested_splash").addEventListener("input", () => current_splash.value = parseInt(document.getElementById("requested_splash").value));
document.getElementById("previous_splash").addEventListener("click", () => {if(texts[current_splash.value - 1][2] == true && localStorage.getItem("suggestive") == "no I am a virgin") incrementSplash(-2); else incrementSplash(-1)});
document.getElementById("next_splash").addEventListener("click", () => {if(texts[current_splash.value + 1][2] == true && localStorage.getItem("suggestive") == "no I am a virgin") incrementSplash(2); else incrementSplash(1)});
sexcheck.addEventListener("change", toggleSuggestive)