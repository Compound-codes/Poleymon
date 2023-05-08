let muted = false;
let poleyEncounters = 0;

// music
const throwSoundEffect = new Audio("../music/throw.mp3");
const music = new Audio("../music/Poleymon.mp3");
music.loop = true;
throwSoundEffect.volume = 0.7;

function throwSound() {
    throwSoundEffect.play();
}

//pick Poleys


function pickPoley(poleyArray) {
    let poleyArrayRarity = poleyArray.map(function (obj) {
        let poleyArrayLength = poleyArray.length / 20;
        return obj.rarity / poleyArrayLength;
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
    let poleyCounter = selectedObject.counter;
    poleyCounter += 1;


    // console.log(selectedObject);
    let poleyMon = selectedObject.name;
    cPc(poleyMon)

    return selectedObject;
}

function cPc(poleyName) {
    let poleyCounterName = poleyName + "Counter";
    let poleyPerson = "poleys/" + poleyName + ".png";
    let poleyImg = document.querySelector("#poleyimg");
    poleyImg.setAttribute("src", poleyPerson);
    document.querySelector("#" + poleyCounterName).innerHTML = "<img src='poleys/" + poleyName + ".png'><h5 id='" + poleyCounterName + "'>" + eval(poleyName).counter + "</h5>"
    if (poleyName.includes("shiny")) {
        console.log("shiny!");
        animateSpin("#" + poleyCounterName);
    }
}

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

    const shiny = document.querySelector(querySelector);
    shiny.animate(poleySpinning, poleyTiming);

    shiny.addEventListener("click", () => {
        if (Math.round(Math.random) == 1) {
            shiny.animate(poleySpinning, poleyTiming);
        } else {
            shiny.animate(poleySpinningOther, poleyTiming);
        }
    });
}

function cPchangePoley(poleyArray) {
    music.play();
    throwSound();
    let poleyMonObject = pickPoley(poleyArray);
    let poleyMon = poleyMonObject.name;
    poleyMonObject.counter += 1;
    calculateWorth(poleyMonObject);
    if (poleyMon.includes("Poley")) {
        let poleyMon0 = poleyMon.split("");
        poleyMon0[0] = poleyMon0[0].toUpperCase();
        poleyMon = poleyMon0.toString();
        document.querySelector("#poleygot").innerHTML = poleyMon.replace(/,/g, '');
    } else {
        let poleyMon0 = poleyMon.split("");
        poleyMon0[0] = poleyMon0[0].toUpperCase();
        poleyMon = poleyMon0.toString();
        document.querySelector("#poleygot").innerHTML = poleyMon.replace(/,/g, '');
    }
    let changedPoley = document.querySelector("#changePoley");
    changedPoley.setAttribute('disabled', '');
}

function startNotDisabled() {
    setTimeout(notDisabled, 2000);
}

function save() {
    let poleyCounters = updateCompletedPoleyThingy();
    let encodedPoley = btoa(poleyCounters);
    copyToClipboard(encodedPoley);
    alert(encodedPoley);
}

function load() {
    let saveCode = prompt("what is your save code?");
    let decodedCode = atob(saveCode);
    let saveCodeArray = decodedCode.split(" ");
    console.log(saveCodeArray);
    let newSaveCodeArray = finalPoleys.map(function (obj) {
        let saveCodeArrayIndex = finalPoleys.indexOf(eval(obj.name));
        let poleyOBJ = {
            "name": obj.name,
            "value": Number(saveCodeArray[saveCodeArrayIndex]) - 1
        }
        return poleyOBJ;
    })


    for (i in newSaveCodeArray) {
        let indexValue = newSaveCodeArray[i];
        if (indexValue['value'] != 0) {
            let indexName = indexValue['name'];
            eval(indexName + ".counter = " + indexValue['value']);
            cPc(indexName);
            eval(indexName + ".counter = " + indexValue['value'] + "+ 1");

        } else {
            console.log(" index value is equal to 0");
        }
    }

}

function notDisabled() {
    let changedPoley = document.querySelector("#changePoley");
    changedPoley.disabled = false;
}

function updateCompletedPoleyThingy() {
    let completedPoleyThingy = finalPoleys.map(function (obj) {
        console.log(obj.counter);
        return obj.counter + " "
    })

    let constipated = completedPoleyThingy.toString();

    console.log(constipated.replaceAll(",", ""))
    completedPoleyThingy = constipated.replaceAll(",", "").slice(0, -1);

    return completedPoleyThingy;
}

function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function count(url) {
    poleyEncounters += 1;
    let poleyThing = 20 - poleyEncounters;
    if (poleyEncounters == 20) {
        document.querySelector("#worldLink").innerHTML = "<a class='worldLink' href = './" + url + "'>To " + url + "!</a>"
    } 
    if (poleyThing > 0) {
        document.querySelector("#counter").innerText = poleyThing;
    } else {
        document.querySelector("#counter-p").innerText = "Go to the next world!";
    }

}
