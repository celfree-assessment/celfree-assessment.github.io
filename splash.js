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
    ["Dickhead, fuckface, cock smoking, motherfucking asshole, dirty twat, waste of semen, hope you die, hey!" , "Platypus - Green Day (1997)", false],
    ["\"WHAT DO WE WANT?\nTRANS RIGHTS!\nHOW WILL WE GET IT?\nTRANS WRONGS!\"" , "--yukkoex, 2024", false],
    ["\"Stupid 12\" tom\"" , "--mr nguyen, 2025", false],
    ["Under the overpass, sleeping in broken glass" , "The American Dream Is Killing Me - Green Day (2023)", false],
    ["God is gay" , "Stay Away - Nirvana (1991)", false],
    ["\"Click?! I am the fucking click!!\"" , "--ringo starr", false],
    ["\"I'm going to stick your expensive microphone in the microwave and turn it on\"" , "--tre cool", false],
    ["\"hjonk\"" , "--goose", false],
    ["Another turning point, a fork stuck in the road..." , "Good Riddance - Green Day (1995)", false],
    ["\"wewnyasdfoywerhnwaeroi823987n234... MYYYYYYYY PEEEEEEEEEEEEENIISSS... aaaaAAAAAAAaksdjfgaseuif7baw8er67ba\"" , "--kasane teto, 2025 (BIRDBRAIN - Jamie Paige)", false],
    ["\"恋をして ふられ また捨てられて\"" , "Machine Love - Jamie Paige", false],
    ["How the fuck did LocalAlloc() fail again?! oh wait, I tried to allocate 19 GiB of memory" , "", false],
    ["If you ever want to activate Windows 95, just use the key 111-1111111!<br>It's because the first three digits are not on the list of prohibited sequences, and the last seven digits are divisible by 7.", "", false],
    ["If you ever want to activate Windows 95, just use the key 000-0000007!<br>It's because the first three digits are not on the list of prohibited sequences, and the last seven digits are divisible by 7.", "", false],
    ["Destroying testosterone in my body since 2025", "", false],
    ["scotty from marketing", "", false],
    ["Oh god, it’s time to go, gotta say goodbye. I gotta say goodbye. Gotta say goodbye now. Gotta say goodbye. I’m gonna go home and get on my Big Wheel. Gonna get on my Big Wheel. No, I’m gonna get on my bicycle. No, I’m gonna get on my scooter. No, my scooter. No, I mean I’m gonna get on my bicycle. I’m gonna get on... I’m gonna get on my... on my... on my... on my Tonka truck! I’m gonna get on my Tonka truck. I’m gonna take it, I’m gonna go down the street, I’m gonna smash it up against a window. I’m gonna smash it up against a window! Yeah I am! I’m gonna go smash it up against one! ‘cause I got a pet rock. I got a pet rock, too! I got a pet rock, it’s really cool. I got a pet rock, I got... It’s more like... It’s like a... It’s like a... It’s like a... It’s like, it's like a worry stone. It’s a worry stone. You take it, you worry, you worry, you worry, you worry, you worry, you worry, you rub it, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry... SHIT!", "--billie joe armstrong, 1994 (She - Live @ Jaded in Chicago)", false],
    ["You take it, you worry, you worry, you worry, you worry, you worry, you worry, you rub it, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry, you worry... SHIT!", "--billie joe armstrong, 1994 (She - Live @ Jaded in Chicago)", false],
    ["‘cause I got a pet rock. I got a pet rock, too! I got a pet rock, it’s really cool. I got a pet rock, I got... It’s more like... It’s like a... It’s like a... It’s like a... It’s like, it's like a worry stone.", "--billie joe armstrong, 1994 (She - Live @ Jaded in Chicago)", false],
    ["She, she screams in silence, a sullen riot penetrating through her mind", "She - Green Day (1993)", false],
    ["T&&", "double/rvalue reference", false],
    ["So when will all my troubles gonna end?", "Paper Lanterns - Green Day (1990)", false],
    ["HEINEKEN?!?! FUCK THAT SHIT!!!!! PABST! BLUE! RIBBON!", "blue velvet", false],
    [":3", "", false],
    ["I'm taking away your :3 rights.", "", false],
    ["Damn my prep catholic teacher to hell", "", false],
    ["waaaake me up, when september endsssss...", "Do I need to say where this comes from?", false],
    ["fuck shit bitch ass dick tits cock motherfuck pussy cunt", "", false],
    ["Evans drumheads are overrated. Remo for the win", "", false],
    ["C++ != C. They're not even similar, HR twats.", "", false],
    ["Install linux.", "It's worth it.", false],
    ["Whoever says beginners shouldn't use archinstall, fuck you. You can't expect everyone to know how to partition and generate an fstab file! Also, archinstall works 99% of the time. For minimal beginner installs, it works.", "", false],
    ["Don't wanna be an American Idiot", "American Idiot - Green Day (2004)", false],
    ["I'm not part of a MAGA agenda", "American Idiot - Green Day (2004, 2022 revision)", false],
    ["\"I did not shit my pants at a Engadine Maccas in 1997\"", " --scotty from marketing, 2018", false],
    ["I'm not growing up, I'm just burning out, and I stepped in line to walk amongst the dead", "Burnout - Green Day (1993)", false],
    ["I sit in the state of the daydream, with all your words flying over my head", "409 In Your Coffeemaker - Green Day (1990)", false],
    ["And I'm looking back now at where I have gone wrong, and why I could not seem to get along", "409 In Your Coffeemaker - Green Day (1990)", false],
    ["you kids get off my darn property", "#42 got relocated to #165", false], 
    ["\"Don't do drugs, kids.\"", "--my boyfriend, 2025\n(I do not endose this message)", false],
    ["ooooooo you like kissing boys", "you're a boykisser oooooooooo", false],
    ["Moderate rock", "I'll be genuinely surprised if you pinpoint the exact song I'm referring to.", false],
    ["MAYDAY EVERY DAY, IS MY HEART", "Tourette's - Nirvana (1993 In Utero version)", false],
    ["\"You know I will obey, so please don't make me beg\"", "Blood, Sex and Booze - Green Day (2000)", false],
    ["\"nice ass\"", "--guy from Warning music video, 2000", false],
    ["...or shut up and become a victim of authority", "Warning - Green Day (2000)", false],
    ["\"Do you understand me?\"", "\"shit\"", false],
    ["G13", "", false],
    ["No, I cannot play Caravan. Shut up.", "", false],
    ["It has now been 0 DAY(S) since Warning was last called underrated. The record of 1 DAY(S) was recorded on October 3, 2000", "warning is underrated", false],
    ["All dressed up and nowhere to go", "True Trans Soul Rebel - Against Me! (2014)", false],
    ["Does god bless your transsexual heart?", "True Trans Soul Rebel - Against Me! (2014)", false],
    ["\"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off\".", "--Bjarne Stroustrup, 1986", false],
    ["You should've been a mother, you should've been a wife, you should've been gone from here years ago, you should be living a different life", "True Trans Soul Rebel - Against Me! (2014)", false],
    ["\"You're gonna hang like a cross 'round my neck, you're gonna hang, YOU'RE GONNA HANG!!\"", "Osama Bin Laden as the Crucified Saint - Against Me! (2014)", false],
    ["What's the best thing you can hope for? Pity fucks and table scraps?", "Osama Bin Laden as the Crucified Saint - Against Me! (2014)", false],
    ["Ready for a cheap escape, on the brink of self destruction", "Panic Song - Green Day (1995)", false],
    ["play panic song and no one knows live please green day", "", false],
    ["FreeCell &gt; Klondike", "", false],
    ["I love how Klondike is such a classic that they literally use the word Solitaire, a name for all singleplayer card games, to mean Klondike. Like FreeCell, TriPeaks and Spider are all solitaire games too!", false],
    ["I wanna jump out", "Panic Song - Green Day (1995)", false],
    ["Sing us the song of the century, things like American Eulogy", "American Eulogy: Mass Hysteria/Modern World - Green Day (2009)", false],
    ["The class war is hanging on a wire, because the martyr is a compulsive liar when he said \"it's just a bunch of n****rs throwing gas into the hysteria\"", "Stop taking this line out of context. Yes, they said the n-word, a slur, but it's fucking art and it was 2009. Deal with it.", false],
    ["I'm not okaaaaaaaaaaaay", "three words (and cheers for revenge): My Chemical Romance. guess where this quote comes from", false],
    ["A kiss goodbye, your twisted shell, as rice grains and roses fall at your feet, let's say goodbye, a hundredth time, and tomorrow we'll do it again", "Drowning Lessons - My Chemical Romance (2002)", false],
    ["sorry, the splash that was supposed to go here was redirected to #42", ""]
    ["\"meow meow meow meow meow meow, meow meow meow meow meow meow , AAAAUUUUUUUUUUUUUUUUUUUUUUUUUGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH\"", "serj tankian, 2015", false],
    ["\"I shit my pants\"", "--serj tankian, 2015", false],
    ["AND ISHKUR, LET'S GO MOTHERFUCKKKKERRRRR", "Darts - System of a Down (1998)", false],
    ["I've killed everyone... BUT NOW I'M FEELING BETTER", "Sugar - System of a Down (1998)", false],
    ["Fuck it all and fucking no regrets", "St. Anger - Metallica (2003)", false],
    ["PING, PING, PING, PING", "--lars' snare drum on St. Anger", false],
    ["challenge: play a 5:4 polyrhythm", "", false],
    ["What you did to me, I'll do to you, you get what everyone else gets, but you get a LIFETIME!!", "It's Not A Fashion Statement, It's a Fucking Deathwish - My Chemical Romance (2004)", false],
    ["\"hey look, I'm skiing!!\"", "--tre cool, unknown", false],
    ["I just ate a shit ton of cheese and now I feel like shit", "", false],
    ["63 为让我心醉的你", "Butcher Vanity - Flavor Foley", false],
    ["What do I do? What do I say? Fuck you, it all goes away!", "Sugar - System of a Down (1998)", false],
    ["may I please remain in this space", "Darts - System of a Down (1998)", false],
    ["sudo hyprland", "", false],
    ["my cat's name is :(){:|:&};: you should type his name on your linux's terminal", "", false],
    ["雑魚", "the single most controversial/hated Vocaloid song, but thank god it was reuploaded with akita neru", false],
    ["波泼墨佛", "", false],
    ["Not all these splash texts hold any meaning. Sometimes I say random shit or type in lyrics I like.", "", false],
    ["\"I'm taking pride, in telling you to fuck off and die\"", "F.O.D. - Green Day (1994)", false],
    ["\"This isn't public peace, it's fucking anarchy!\"", "--billie joe armstrong, during Paper Lanterns, live at Woodstock 94", false],
    ["shitshitshitshit", "", false],
    ["shghdhshghdh", "", false],
    ["congas are actually fun to play when you've had an iced double espresso", "", false],
    ["You wallow in your shit, and you'll think you're happy", "Sappy - Nirvana (1989)", false],
    ["PPP.h", "", false],
    ["I'll take advantage while, you leave me out to dry", "About A Girl - Nirvana (1989)", false],
    ["I have developed a lactose intolarance, fuck", "", false],
    ["\"So yeah, I've suddenly lost the ability to break down lactose so you'll suffer any time you eat cheese\"", "--my gut, 2025", false],
    ["Wide open road to my future now, it's looking fucking narrow", "Knowledge - Operation Ivy (1989)", false],
    ["Back in school, you ever get busted for trying to walk and have some administrator tell you, \"Son, you can strike down your obligations and try to be different from your peers, but the responsibilities of the future, IS GONNA FIND YOU.\"", "Gonna Find You - Operation Ivy (1989)", false],
    ["char **argv", "", false],
    ["sudo hyprland --i-am-really-stupid", "I hope you know what you are doing", false],
    ["My cat's name is rd C:\\, you should type his name into the MS-DOS prompt", "", false],
    ["I TOLD YOU ABOUT STAIRS", "it keeps happening.", false],
    ["MY GUY CAN YOU STOP SUCKING THE DICK OF Man's Best Friend", "", false],
    ["I don't actually read Homestuck. My boyfriend does and he introduced me to Sweet Bro and Hella Jeff and I saw the comic about the stairs.", "", false],
    ["Where the fuck are you? Why don't presidents fight the war? Why do they always send the poor?", "B.Y.O.B. - System of a Down", false],
    ["I'm a walking contradiction, and I got no right", "你他妈真的不以身作则", false],
    ["Well I'm not stoned, I'm just fucked up", "Before the Lobotomy - Green Day", false],
    ["\"I wanna know who's allowed to breed, the dogs who never learned how to read\"", "East Jesus Nowhere - Green Day", false],
    ["Ziljian K hi-hats just like Mike from NOFX", "14\" k fat hats", false],
    ["Ziljian K hi-hats just like Tony from the Simpsons", "14\" k fat hats", false],
    ["You are your own worst enemy, know your enemy", "Restless Heart Syndrome - Green Day", false],
    ["news: help!", "", false],
    ["", "", false],
    ["no fucking splash fucking text for you fucking fucker", "yeah! fuck you you motherfucker", false],
    ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "", false],
    ["SHOOT THE FUCKING MOON", "26", false]
    ["T&&", "std::move", false],
    ["planet z cymbals fucking suck", "they're abrasive, bright af like calm the fuck down fucker there's nothing to be that bright about, sound like shit in general and feel shit to play because it's cheap dense brass that gives you carpal tunnel", false],
    ["tip of the day: put InitiateSystemShutdownEx in your code somewhere", "BOOL InitiateSystemShutdownExW(_in_opt LPWSTR lpMachineName, _in_opt LPWSTR lpMessage, _in_ DWORD dwTimeout, _in_ BOOL  bForceAppsClosed, _in_ BOOL  bRebootAfterShutdown, _in_ DWORD dwReason);", false],
    ["fuck you m. xia", "bitch", false],
    ["Well violence is an energy, oh hey oh hey, from now until eternity, oh hey oh hey, well violence is an energy, oh hey oh hey, silence is the enemy SO GIVE ME GIVE ME REVOLUTION!!", "remember these lines, because when Billie Joe asks you if you know the enemy, then you can confidently answer yes", false],
    ["m. xia goons to roblox porn", "and he paid R$2000 for it", true],
    ["m. xia likes being dominated by girls", "the bad isn't that he likes being dominated, but the fact he's trying to assert his non-existent dominance like vro 🥀🥀🥀🥀🥀", true],
    ["love it when people unknowingly reveal they have a futa fetish", "stop fantasising about my genitals, they're small and facing the same fate as King Louis XVI", true],
    ["cao ni ma", ""],
    ["ts pmo 🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀", "🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀🥀"],
    ["m. xia can't get no bitches", "he's fucking stupid"],
    ["m. xia spends all his money on games", "he stole his daddy's credit card"],
    ["m. xia needs to copy from the answer sheet in order to keep up in maths", "vro is NOT doing specialist gang 🥀🥀🥀"],
    ["\"I learnt how to play THAT signature theme\" --mr nguyen, 2025", "you know, ⬛🟧"],
    ["trè pas cool", "english teacher because she looks like tré cool"],
    ["html css js", ""],
    ["I have the best humanities teacher lmaooooo", ""],
    ["O.S.H.A.R.E.", "Obligate Style Hearkens Aflame this Robust Earth - Sinclair (my bf wrote this)"],
    ["\"stop saying swear words\"", "--my bf, 2025"],
    ["\"no\"", "--me, 2025"],
    //["<a href=\"https://www.reddit.com/r/Steam/comments/1np24d6/i_love_this_new_feature_of_the_store_page/\">does furry futa have a good soundtrack u/Mitch0712?</a>", ""],
    ["if the singer from Foo Fighters shaved he'd look like the drummer from Nirvana", "no way I see the resemblance"],
    ["kurt cobeans", ""],
    ["beans, beans, beans, jesse ate some beans", "Beans - Nirvana"],
    ["fuckfuckfuckfuck", ""],
    ["I'm a victim of catch-22", "Walking Contradiction - Green Day (1995)"],
    ["NIMWOD", ""],
    ["segfault", ""],
    ["hr twats when I ask them why all the code is in one fucking source file: ", ""],
    ["if you didn't get the joke in splash #145, the joke is that they used AI like every other boomer", ""],
    ["AI \"bros\" need to get educated on how to differenciate AI slop and art.", "it's so simple, one is slop, one is art, but somehow AI \"bros\" see both as art"],
    ["weeb", "weeby weeby weeb"],
    ["shit seven", ""],
    ["you know this green don't you", "", "", true], // todo: fix this colour
    ["xxx", "", true],
    ["fish", "", false],
    ["I TOOK ONE DAY OFF TO TAKE A REST AND NOW I'M FAILING 'CUZ I MISSED A TEST", "REGRET ROCK - MonochroMenance", false],
    ["你tm又说对了", "--造句网站好图片", false],
    ["roses are red, my father bids, jesus struggling to remember when exactly he told followers to bully trans kids", "", false],
    ["codeHS", "", false],
    ["block coding fucking sucks", "", false],
    ["\"\"", "Last Ride In - Green Day", false],
    ["311", "", false],
    ["longview, wa", "i sit around and watch the tube but nothing's on", false],
    ["I've got no motivation, where is my motivation, no time for the motivation, smoking my inspiration", "Longview - Green Day", false],
    ["TRY HER PHILOSOPHY", "Suite-Pee - System of a Down (1998)", false],
    ["I-E-A-I-A-I-O", "omg that one song from soad?", false],
    ["fix me", "--James Hetfield, 1986", false],
    ["You wanna know a time curiosity killed the cat? ", "go to splash #", true],
    ["\n", "bicycle shoestring", false],
    ["I got a little too curious one day and I realised there are SEVEN ENTRIES on r34 that include the tags\"lars_ulrich/\".", "what the actual fuck lmao I get he's a bad drummer but don't goon to him lmao<br>and if you came from splash #42 hello", true],
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
