// elements 
const main_splash = document.getElementById("main_splash");
const second_splash = document.getElementById("secondary_splash");
const splash_number = document.getElementById("splash_id");

// WARNING: Keep this const and hardcoded. These splash texts will only be referenced once and is the most secure way to prevent XSS
// Array format goes like this:
//  [0] Main splash text : string
//  [1] Secondary splash text : string
//  [2] Is suggestive splash
//
const texts = [
    ["I hyphenate every On-line term to piss my generation off", "", false],
    ["Failed to generate splash text" , "--my website", false],
    ["LNK2019, unresolved external symbol NtRaiseHardError" , "--vc++ 2022, 2025", false],
    ["\"Stupid 12\" tom\"" , "--mr nguyen, 2025", false],
    ["Under the overpass, sleeping in broken glass" , "The American Dream Is Killing Me - Green Day (2023)", false],
    ["God is gay" , "Stay Away - Nirvana (1991)", false],
    ["\"I'm going to stick your expensive microphone in the microwave and turn it on\"" , "--tre cool", false],
    ["\"hjonk\"" , "--goose", false],
    ["Another turning point, a fork stuck in the road..." , "Good Riddance - Green Day (1995)", false],
    ["\"恋をして ふられ また捨てられて\"" , "Machine Love - Jamie Paige", false],
    ["scotty from marketing", "", false],
    ["She, she screams in silence, a sullen riot penetrating through her mind", "She - Green Day (1993)", false],
    ["T&&", "double/rvalue reference", false],
    ["So when will all my troubles gonna end?", "Paper Lanterns - Green Day (1990)", false],
    [":3", "", false],
    ["waaaake me up, when september endsssss...", "Do I need to say where this comes from?", false],
    ["Evans drumheads are overrated. Remo for the win", "", false],
    ["Install linux.", "It's worth it.", false],
    ["Don't wanna be an American Idiot", "American Idiot - Green Day (2004)", false],
    ["I'm not part of a MAGA agenda", "American Idiot - Green Day (2004, 2022 revision)", false],
    ["I'm not growing up, I'm just burning out, and I stepped in line to walk amongst the dead", "Burnout - Green Day (1993)", false],
    ["I sit in the state of the daydream, with all your words flying over my head", "409 In Your Coffeemaker - Green Day (1990)", false],
    ["And I'm looking back now at where I have gone wrong, and why I could not seem to get along", "409 In Your Coffeemaker - Green Day (1990)", false],
    ["Moderate rock", "I'll be genuinely surprised if you pinpoint the exact song I'm referring to.", false],
    ["MAYDAY EVERY DAY, IS MY HEART", "Tourette's - Nirvana (1993 In Utero version)", false],
    ["...or shut up and become a victim of authority", "Warning - Green Day (2000)", false],
    ["It has now been 0 DAY(S) since Warning was last called underrated. The record of 1 DAY(S) was recorded on October 3, 2000", "warning is underrated", false],
    ["\"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off\".", "--Bjarne Stroustrup, 1986", false],
    ["FreeCell &gt; Klondike", "", false],
    ["I wanna jump out", "Panic Song - Green Day (1995)", false],
    ["A kiss goodbye, your twisted shell, as rice grains and roses fall at your feet, let's say goodbye, a hundredth time, and tomorrow we'll do it again", "Drowning Lessons - My Chemical Romance (2002)", false],
    ["\"meow meow meow meow meow meow, meow meow meow meow meow meow , AAAAUUUUUUUUUUUUUUUUUUUUUUUUUGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH\"", "serj tankian, 2015", false],
    ["PING, PING, PING, PING", "--lars' snare drum on St. Anger", false],
    ["challenge: play a 5:4 polyrhythm", "", false],
    ["\"hey look, I'm skiing!!\"", "--tre cool, unknown", false],
    ["may I please remain in this space", "Darts - System of a Down (1998)", false],
    ["sudo hyprland", "", false],
    ["my cat's name is :(){:|:&};: you should type his name on your linux's terminal", "", false],
    ["波泼墨佛", "", false],
    ["Not all these splash texts hold any meaning. Sometimes I say random shit or type in lyrics I like.", "", false],
    ["I'll take advantage while, you leave me out to dry", "About A Girl - Nirvana (1989)", false],
    ["sudo hyprland --i-am-really-stupid", "I hope you know what you are doing", false],
    ["My cat's name is rd C:\\, you should type his name into the MS-DOS prompt", "", false],
    ["I TOLD YOU ABOUT STAIRS", "it keeps happening.", false],
    ["news: help!", "", false],
    ["", "", false],
    ["T&&", "std::move", false],
    ["tip of the day: put InitiateSystemShutdownEx in your code somewhere", "BOOL InitiateSystemShutdownExW(_in_opt LPWSTR lpMachineName, _in_opt LPWSTR lpMessage, _in_ DWORD dwTimeout, _in_ BOOL  bForceAppsClosed, _in_ BOOL  bRebootAfterShutdown, _in_ DWORD dwReason);", false],
    ["ts pmo 🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀", "🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀"],
    ["html css js", ""],
    ["O.S.H.A.R.E.", "Obligate Style Hearkens Aflame this Robust Earth - Sinclair (logan wrote this)"],
    ["\"no\"", "--me, 2025"],
    ["if the singer from Foo Fighters shaved he'd look like the drummer from Nirvana", "no way I see the resemblance"],
    ["segfault", ""],
    ["fish", "", false],
    ["fix me", "--James Hetfield, 1986", false],
    ["\n", "bicycle shoestring", false],
    ["did you remember to pay the utility?", "Warning - Green Day (2000)", false]
];

let current_splash = {
    _value: 0,

    get value() {
        return this._value; 
    },

    set value(newValue) {
        button = document.getElementById("regen_splash");
        this._value = newValue;

        if(newValue > texts.length || newValue < -2)
            button.textContent = "Crash my web-site!";
        else if(newValue > -1 && newValue < 0)
            button.textContent = "???";
        else
            button.textContent = "Request splash!";

        console.log("new splash id is " + newValue + ", remember to apply the new id");

        if(texts[current_splash.value][2] == true)
            console.log("WARNING: splash is sexually suggestive. make sure user has suggestive splashes enabled before applying new splash");
    }
}

// set text
current_splash.value = Math.floor(Math.random() * texts.length);
main_splash.textContent = texts[current_splash.value][0];
second_splash.textContent = texts[current_splash.value][1];
second_splash.style.marginLeft = "100px";

// show splash number
splash_number.textContent = "Current splash is #" + (current_splash.value + 1);
