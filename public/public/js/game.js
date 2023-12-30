if (true){
let muted, asideGone, leftAsideGone = false;
// let asideGone = false;
let poleyCoin, poleyEncounters, loaded, saveInterval, autoPoleys;

// * music
const throwSoundEffect = new Audio("./public/music/throw.mp3");
let music = new Audio("./public/music/Poleymon.mp3");
music.loop = true;
throwSoundEffect.volume = 0.7;

function throwSound() {
    throwSoundEffect.play();
}

//* pick Poleys

// ! DO NOT CHANGE PICK POLEYS FUNCTIONS


function pickPoley(poleyArray) {
    let poleyArrayRarity = poleyArray.map(function (obj) {
        let poleyArrayLength = poleyArray.length / 20;
        return (obj.rarity) / poleyArrayLength;
    })
    const totalPercentage = poleyArrayRarity.reduce((acc, val) => acc + val, 0);
    const randomNumber = Math.random() * totalPercentage;
    let cumulativePercentage = 0;
    let selectedObject;
    for (let i = 0; i < poleyArrayRarity.length; i++) {
        cumulativePercentage += poleyArrayRarity[i];
        if (randomNumber <= cumulativePercentage) {
            selectedObject = poleyArray[i];
            break;
        }
    }

    var shiny;
    if (Math.floor(Math.random()*10000) < 100) {
        if (selectedObject.counter > 1) {
            selectedObject.shinyCounter += 1;
            shiny = true;
        } else {
            selectedObject.counter += 1;
            shiny = false;
        }

    } else {
        selectedObject.counter += 1;
        shiny = false;
    }


    let poleyMon = selectedObject.name;
    cPc(poleyMon, shiny);

    return [selectedObject, shiny];
}

function cPc(poleyName, shiny = false) {
    poleyName = poleyName.replaceAll(" ", "");
    let poleyPerson = "public/poleys/" + poleyName + ".png";
    if (shiny) {
        poleyPerson = "public/poleys/shiny" + capitalize(poleyName) + ".png"
    }
    let poleyImg = $("#poleyimg");
    poleyImg.prop("src", poleyPerson);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Update Poleys

function cPchangePoley(poleyArray) {
    music.play();
    throwSound();
    poleyEncounters += 1;
    let pickedPoley =pickPoley(poleyArray)
    let poleyMonObject = pickedPoley[0];
    let poleyMon = poleyMonObject.name;
    let poleyMon0 = poleyMon.split("");
    poleyMon0[0] = poleyMon0[0].toUpperCase();
    poleyMon = poleyMon0.toString();
    let poleyString = poleyMon.replaceAll(",", "");
    if (pickedPoley[1]) {
        poleyString = "Shiny " + poleyString;
    }
    $("#poleygot").text(poleyString);
    achievement()
}

function collectPoleyHooray(poleyArray) {
    cPchangePoley(poleyArray);
    startNotDisabled();
}


function achievement() {
    if (poleyEncounters == 100) {
        achievementAnimation("100poleys");
        poleyCoin += 500;
    }
}

function achievementAnimation(id) {
    let achievement = $("#" + id);
    achievement.removeClass("gone");
    achievement.addClass("achieveAnimation");
}

function startNotDisabled() {
    let changedPoley = $("#changePoley");
    changedPoley.prop('disabled', true);
    setTimeout(notDisabled, 2000);
}

function notDisabled() {
    let changedPoley = $("#changePoley");
    changedPoley.prop("disabled", false);
}

//* Save and load

function save() {
    let poleyCounters = updateCompletedPoleyThingy();

    let encodedPoley = btoa(poleyCounters);
    localStorage.setItem("saveCode1", encodedPoley);
    localStorage.setItem("encounters1", poleyEncounters);
    localStorage.setItem("coin1", String(poleyCoin));
}

function load() {
    let saveCode = localStorage.getItem("saveCode1");
    poleyEncounters = parseInt(localStorage.getItem("encounters1"));
    poleyCoin = parseInt(localStorage.getItem("coin1"));
    $(".poleycoin").text(poleyCoin.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    }) + " ");
    let decodedCode = atob(saveCode);
    if (decodedCode.includes("NaN")) {
        decodedCode.replaceAll("NaN", 1);
        location.reload();
    }
    let saveCodeArray = decodedCode.split(" ");
    let newSaveCodeArray = finalPoleys.map(function (obj) {
        let objName = obj.name.replaceAll(" ", "")
        let saveCodeArrayIndex = finalPoleys.indexOf(eval(objName));
        let saveCounter = saveCodeArray[saveCodeArrayIndex].split("s");
        let poleyOBJ = {
            "name": objName,
            "value": Number(saveCounter[0]) - 1,
            "shinyValue": Number(saveCounter[1]) - 1
        }
        return poleyOBJ;
    })


    for (i in newSaveCodeArray) {
        let indexValue = newSaveCodeArray[i];
        if (indexValue['value'] != 0) {
            let indexName = indexValue['name'];
            eval(indexName + ".counter = " + indexValue['value']);
            eval(indexName + ".shinyCounter = " + indexValue['shinyValue']);
            cPc(indexName);
            eval(indexName + ".counter = " + indexValue['value'] + "+ 1");
            eval(indexName + ".shinyCounter = " + indexValue['shinyValue'] + " + 1");


        }
    }
    loaded = true;
}

function updateCompletedPoleyThingy() {
    let completedPoleyThingy = finalPoleys.map(function (obj) {
        return obj.counter + "s" + obj.shinyCounter + " "
    });
    let constipated = completedPoleyThingy.toString();
    completedPoleyThingy = constipated.replaceAll(",", "").slice(0, -1);
    return completedPoleyThingy;
}

function clearSave() {
    let cleared = prompt("Are you sure? y/n");
    if (cleared === "y") {
        clearInterval(saveInterval);
        localStorage.setItem("saveCode1", "MXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczE=");
        localStorage.setItem("encounters1",
        "0");
        localStorage.setItem("coin1", "0")
        alert("cleared!");
        location.reload();
    } else {
        alert("phew");
    }
}

const isFirstVisit = localStorage.getItem('isFirstVisit') === null;

if (isFirstVisit) {
    // do something for first-time visitors
    localStorage.setItem('isFirstVisit', true);
    localStorage.setItem("saveCode1", "MXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczEgMXMxIDFzMSAxczE=");
    localStorage.setItem("encounters1", "0");
    localStorage.setItem("coin1", "0");
    localStorage.setItem("ownedPoleysPercentage", "0")
    //   localStorage.setItem("")

}

// TODO: make a function that automatically collects poleys:
// TODO: i.e. every 10 sec... To do it when offline, take time using save()
// TODO: Then when load, collect that time and measure it to the current time 
// TODO: then calculate

// * Other Stuff

function pickWorld() {
    let poleyWorld = $("#poleyWorldSelection").val();
    let changePoley = $("#changePoley");
    if (poleyWorld == "home") {
        changePoley.attr("onclick", "collectPoleyHooray(poleys)");
    } else {
        changePoley.attr("onclick", "collectPoleyHooray(pWorld" + poleyWorld + ")");
        // TODO: Change song by stopping first song and starting second song!
    }
}

document.addEventListener("keypress", function (event) {
    if (event.code === "BracketRight") {
        if (!asideGone) {
            $("aside")[2].classList.add("gone");

        } else {
            $("aside")[2].classList.remove("gone");
        }
        asideGone = !asideGone;

    } else if (event.code === "BracketLeft") {
        if (!leftAsideGone) {
            $("aside")[0].classList.add("gone");
        } else {
            $("aside")[0].classList.remove("gone");
        }
        leftAsideGone = !leftAsideGone
    }
});

// TODO: REFACTOR BELOW

let Poleyisapolarbear = new Audio("./public/music/Poleyisapolarbear.mp3");
Poleyisapolarbear.volume = 0.1;
$("#whichsave").addClass("gone");
load();
saveInterval = setInterval(function () {
    save();
}, 50);

$("#percentage1").html(localStorage.getItem("ownedPoleysPercentage") + "%")

function animateSpin(querySelector) {
    const poleySpinning = [{
            transform: "rotate(360deg)"
        },
        {
            transform: "rotate(0)"
        },
    ];

    const poleySpinningOther = [{
            transform: "rotate(0)"
        },
        {
            transform: "rotate(360deg)"
        },
    ];

    const poleyTiming = {
        duration: 2000,
        iterations: 1,
    };

    const shiny = $(querySelector);
    shiny.animate(poleySpinning, poleyTiming);
    shiny.on("click", function() {
        if (Math.round(Math.random) == 1) {
            shiny.animate(poleySpinning, poleyTiming);
        } else {
            shiny.animate(poleySpinningOther, poleyTiming);
        }
    })
}

function changeVolume() {
    music.volume = $("#soundSlider").val();
    throwSoundEffect.volume = $("#soundSlider").val()/10*7;
}

}