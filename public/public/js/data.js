let poleyCoin, poleyEncounters, loaded, saveInterval, autoPoleys;

let ownedPoleys = [];
class Poley {
    constructor(name, rarity, description = "poley;") {
        this.name = name;
        this.rarity = rarity;
        this.counter = 1;
        this.shinyCounter = 1;
        this.worth = calculateWorth(rarity)[0];
        this.shinyWorth = this.worth*80;
        this.description = description;
        this.typeRarity = calculateWorth(rarity)[1];
    }
}

function calculateWorth(rarity) {
    if (rarity >= 80) {
        return [0.01, "Über Common"]
    } else if (rarity >= 50) {
        return [0.02, "Common"]
    } else if (rarity >= 30) {
        return [0.03, "Kind of common"]
    } else if (rarity >= 15) {
        return [0.06, "Uncommon"]
    } else if (rarity >= 8) {
        return [0.1, "Rare"]
    } else if (rarity >= 5) {
        return [0.2, "Pretty rare"]
    } else if (rarity >= 3) {
        return [0.3, "Super Rare"]
    } else if (rarity >= 1) {
        return [0.8, "Epic"]
    } else if (rarity >= 0.5) {
        return [1.8, "Legendary!"]
    } else if (rarity >= 0.1) {
        return [10, "orz"]
    } else {
        return [Math.round(100/rarity)/100, "Holy Cow!"];
    }
}

//* Poley
let poley = new Poley("poley", 100, "He is a polar bear... What else?");
let poleys = [poley];
//* Poley with Item
let mrPoley = new Poley("mr Poley", 30, "Mmmm... Classy...");
let bartenderPoley = new Poley('bartender Poley', 9, "Some said his silhouette looked like a dinosaur...");
let skateboardPoley = new Poley('skateboard Poley', 15, "One of the cool kids.");
let westernPoley = new Poley('western Poley', 16, "We're going western!");
let gunPoley = new Poley('gun Poley', 8, "pew pew");
let cowboyPoley = new Poley("cowboy Poley", 24, "Yeehaw!");
let pWorld1 = [mrPoley, bartenderPoley, skateboardPoley, westernPoley, gunPoley, cowboyPoley];
//* Poley item
let deskPoley = new Poley("desk Poley", 13, "Likes to hide under desks for some reason... Maybe it smelled itself.");
let calculatorPoley = new Poley("calculator Poley", 8, "According to my calculations...");
let pole = new Poley("pole", 13, "Y does he have no ears?");
let gumPoley = new Poley("gum Poley", 1, "Ew! Somebody chewed this guy and he's stuck on your page!");
let milkPoley = new Poley("milk Poley", 13, "Need some milk? Here, take a bucket.");
let ribcagePoley = new Poley('ribcage Poley', 25, "*Jumpscare*");
let hatPoley = new Poley('hat Poley', 9, "He's looking like a champ!");
let trainPoley = new Poley('train Poley', 20, "I like trains!");
let pWorld2 = [deskPoley, calculatorPoley, pole, gumPoley, milkPoley, ribcagePoley, hatPoley, trainPoley]
//* Outdoors
let tumbleweedPoley = new Poley("tumbleweed Poley", 15, "*drifts unnoticeably*");
let grassPoley = new Poley("grass Poley", 20, "You probably need to touch some of him.");
let treePoley = new Poley('tree Poley', 10, "I am the Tree and I speak for the Poleys!");
let logPoley = new Poley('log Poley', 5, "Basically a dead TREE POLEY");
let rainPoley = new Poley('rain Poley', 20.5, "Poleys don't usually like the wet!");
let riverPoley = new Poley('river Poley', 8, "You do not want to see the shiny...");
let stonePoley = new Poley('stone Poley', 16, "stone.");
let cavePoley = new Poley('cave Poley', 1, "So low probability since he looks ugly");
let moltenPoley = new Poley('molten Poley', 4.5, "Don’t touch him! He’s hot!");
let pWorld3 = [tumbleweedPoley, grassPoley, treePoley, logPoley, rainPoley, riverPoley, stonePoley, cavePoley]
//* Astronomy
let sunPoley = new Poley('sun Poley', 55, "Don't look directly with your eyes!");
let moonPoley = new Poley('moon Poley', 35, "Cheese?");
let starPoley = new Poley('star Poley', 10, "Destined to become a movie star!");
let suspiciousPoley = new Poley('suspicious Poley', 7, "Sus! sus Imposter frfr");
let pWorld4 = [sunPoley, moonPoley, starPoley]
//* Magical
let magicPoley = new Poley("magic Poley", 0.1, "Ancient Magician who can create potatoes out of nowhere!");
let polarPoley = new Poley('polar Poley', 5, "Existed in the future of Earth. Corrupted by radioactivity in the Polar realm.");
let portalPoley = new Poley('portal Poley', 81, "Waaaaa… I’m getting sucked in by the portal too!!!");
let firePoley = new Poley('fire Poley', 10.4, "Late ancestor of Magma Poley. Tends to become blue as they get angrier.");
let waterPoley = new Poley('water Poley', 3.5, "caged in a bottle to contain its power.");
let pWorld5 = [magicPoley, polarPoley, portalPoley];
//* Type of Poley
// Factory?
let crushedPoley = new Poley("crushed Poley", 15, "Oof, what happened to him?");
// Shapes? Geometry?
let squarePoley = new Poley('square Poley', 25, "It fits in the square hole!");
// Five senses?
let stinkyPoley = new Poley('stinky Poley', 15.5, "Ewwwww!");
// Average Family
let boliePoley = new Poley("bolie Poley", 5.5, "Middle schooler who uses a flamethrower");
// Halloween?
let ghostPoley = new Poley('ghost Poley', 14.5, "oOoOh spOoKy");
let pWorld6 = [crushedPoley, moltenPoley, squarePoley, stinkyPoley, boliePoley, suspiciousPoley, ghostPoley]
//* Animal
let bugPoley = new Poley("bug Poley", 100, "Bzz. I'm not symmetrical.");
let pWorld7 = [bugPoley];
//* Food
let invertedWatermelonPoley = new Poley('inverted Watermelon Poley', 100, "Made this so I would have to type more.");
let pWorld8 = [invertedWatermelonPoley];
//* Others
let bob = new Poley("bob", 50, "Stop hitting my ribcage with a metal bar!");
let doii = new Poley('doii', 50, "Basically an idiotic poley.");
let pWorld9 = [bob, doii];
let a = new Poley('a', 3900/351, "poley is A polAr beAr.");
let b = new Poley('b', 3700/351, "poley is a polar Bear");
let c = new Poley('c', 3500/351, "and poley is Coolio.");
let d = new Poley('d', 3300/351, "and poley DiDn't ask.");
let e = new Poley('e', 3100/351, "polEy is a polar bEar.");
let f = new Poley('f', 2900/351, "poley may have Farted");
let g = new Poley('g', 2700/351, "poley: oh Gosh darn it");
let h = new Poley('h', 2500/351, "poley Has Hundreds of Horrendous knigHts");
let i = new Poley('i', 2300/351, "poley Is a polar bear.");
let j = new Poley('j', 2100/351, "and poley is Just better.");
let k = new Poley('k', 1900/351, "poley loves sKaps");
let l = new Poley('l', 1700/351, "LoL");
let m = new Poley('m', 1500/351, "poley never cries out \"MoMMy\"");
let pWorld10 = [a,b,c,d,e,f,g,h,i,j,k,l,m];
let n = new Poley('n', 3900/351, "poley would Never ever Not open the Noor");
let o = new Poley('o', 3700/351, "pOley is a pOlar bear.");
let p = new Poley('p', 3500/351, "Poley is a Polar bear.");
let q = new Poley('q', 3300/351, "poley is not loQuacious");
let r = new Poley('r', 310/351, "poley is Rad, but sometimes he is not Red, nor bRown");
let s = new Poley('s', 2900/351, "poley is SometimeS Sad, but he SayS that being Sad iS \"SuSSy\"");
let t = new Poley('t', 2700/351, "poley someTimes eaTs pop TarTs TogeTher with oTher poleys");
let u = new Poley('u', 2500/351, "U r kUl");
let v = new Poley('v', 2300/351, "poley is always Very sorry, for he is always aboVe people");
let w = new Poley('w', 2100/351, "Would u eat a Wagmatic Worriesome Wart that Will Wreck everything?");
let x = new Poley('x', 1900/351, "poley doesn't know what aleXandrite is");
let y = new Poley('y', 1700/351, "Y u crY in the daY or nYte");
let z = new Poley('z', 1500/351, "Zorg Zquabble");
let pWorld11 = [n,o,p,q,r,s,t,u,v,w,x,y,z];
const finalPoleys = [...poleys, ...pWorld1, ...pWorld2, ...pWorld3, ...pWorld4, ...pWorld5, ...pWorld6, ...pWorld7, ...pWorld8, ...pWorld9, ...pWorld10, ...pWorld11]

function search(search =$("#searchBar").val()) {
    let backpack = $("#backpack");
    let searchPoleys = ownedPoleys.map(function (poley) {
        let poleyname = poley.name;
        if (poleyname.toUpperCase().startsWith(search.toUpperCase())) {
            return poleyname;
        }
        return;
    });
    searchPoleys = searchPoleys.filter(function (x) {
        return x !== undefined;
    })
    for (let i = 0; i < searchPoleys.length; i++) {
        let poleything = searchPoleys[i];
        poleything = capitalize(poleything);
        poleything = `<br><br><img src='public/poleys/${searchPoleys[i].replaceAll(" ", "")}.png'><button class='searchedPoley' onclick="describe('${searchPoleys[i].replaceAll(" ", "")}')"> ${poleything} </button><hr>`;
        searchPoleys[i] = poleything;
    }
    searchPoleys = searchPoleys.toString();
    searchPoleys = searchPoleys.replaceAll(",", " ");
    $(backpack).html(searchPoleys);
}

function describe(poleyay, shiny = false) {
    let descName = $("#descName");
    let descImg = $("#descImg");
    let descCounter = $("#descCounter");
    let desc = $("#desc");
    let descRarity = $("#descRarity");
    if (poleyay == "nothing") {
        descImg.prop("src", "public/poleys/poley.png");
        descName.html("Did you know?");
        descCounter.html("Poley is a polar bear");
        desc.html("<audio controls src='./public/music/Poleyisapolarbear.mp3'></audio>");
        descRarity.html("and poley is coolio!");
        return 0;
    }
    let ourPoleything = eval(poleyay);
    let name = capitalize(ourPoleything.name);
    let description = "\"" + ourPoleything.description + "\"";
    let rarity = Math.round(ourPoleything.rarity*100)/100
    if (!shiny) {
        let counter = "You have " + String(ourPoleything.counter - 1) + " " + name + "s.";
        descCounter.html(counter);
        //  + "<br><button onclick='sell()' class='sellButton'>Sell?</button"
        if (descImg.hasClass("sill")) {
            descImg.removeClass("sill");
        }
    } else {
        name = "Shiny " + name;
        // img = "public/poleys/" +name.replaceAll(" ", "") + ".png";
        let counter = "You have " + String(ourPoleything.shinyCounter - 1) + " " + name + "s.";
        rarity = Math.round(rarity*100)/100
        if (ourPoleything.shinyCounter == 1) {
            descImg.addClass("sill")
        } else if (ourPoleything.shinyCounter > 1) {
            descCounter.html(counter);
            //  + "<br><button onclick='sell()' class='sellButton'>Sell?</button"
        }
    }
    let img = "public/poleys/" + name.replaceAll(" ", "") + ".png";
    descImg.prop("src", img);
    descName.html(name);
    desc.text(description);
    descRarity.text(rarity + "%");

}

// function sell() {
//     var shiny = false;
//     let howManySoldPoleys = Number(prompt("how many do you want to sell?"))
//     if (howManySoldPoleys == "") {
//         howManySoldPoleys = 0;
//         return;
//     } else if (howManySoldPoleys < 0) {
//         alert("that's a negative! don't try to cheat!");
//         return;
//     } else if (isNaN(howManySoldPoleys)) {
//         alert("not a number...");
//         return;
//     }
//     let ourpoley = $("#descImg").attr("src");
//     ourpoley = ourpoley.replace("public/poleys/", "");
//     ourpoley = ourpoley.replace(".png", "");
//     ourpoley = ourpoley.charAt(0).toLowerCase() + ourpoley.slice(1);
//     if (ourpoley.includes("shiny")) {
//         ourpoley = ourpoley.replaceAll("shiny", "");
//         ourpoley = ourpoley.charAt(0).toLowerCase() + ourpoley.slice(1);
//         shiny = true;
//     }
//     ourpoley = eval(ourpoley);
//     if (shiny) {
//         if (ourpoley.shinyCounter < howManySoldPoleys+1) {
//             alert("You don't have enough poleys for that!")
//             return;
//         } else {
//             poleyCoin += ourpoley.shinyWorth * parseInt(howManySoldPoleys);
//             ourpoley.shinyCounter = ourpoley.shinyCounter - howManySoldPoleys;
//             console.log("shiny worth added >>>>>>>>>>>", ourpoley.shinyWorth )
//         }
//     } else {
//         if (ourpoley.counter < howManySoldPoleys+1) {
//             alert("You don't have enough poleys for that!")
//             return;
//         } else if (ourpoley.counter == howManySoldPoleys + 1 && ourpoley.shinyCounter > 1) {
//             alert("Sorry! You have to sell all of your shinys to sell this Poley.");
//             return;
//         } else {
//             poleyCoin += ourpoley.worth * parseInt(howManySoldPoleys);
//             ourpoley.counter = ourpoley.counter - howManySoldPoleys;
//         }
//     }
//     $('.poleycoin').text(poleyCoin.toLocaleString("en-US",{
//         style: "currency",
//         currency: "USD"
//     }) + ' ');
//     describe(ourpoley, shiny);
//     if (shiny) {
//         if (ourpoley.shinyCounter == 1) {
//             describe(ourpoley.name);
//         }
//     } else {
//         if (ourpoley.counter == 1) {
//             describe("nothing");
//             let ourpoleyindex = ownedPoleys.indexOf(ourpoley);
//             ownedPoleys.splice(ourpoleyindex, 1);
//         }
//     }
//     search("");
// }

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
    
}

setInterval(function () {
    ownedPoleys = finalPoleys.filter(function (e) {
        return e.counter > 1;
    })
    localStorage.setItem("ownedPoleysPercentage", Math.round(ownedPoleys.length/finalPoleys.length*100))
}, 50);

let loadedinterval = setInterval(function () {
    if (loaded) {
        clearInterval(loadedinterval);
        $("#descImg").on("click", function () {
            let ourpoley = $("#descImg").attr("src");
            ourpoley = ourpoley.replace("public/poleys/", "");
            ourpoley = ourpoley.replace(".png", "");
            ourpoley = ourpoley.charAt(0).toLowerCase() + ourpoley.slice(1);
            if (ourpoley.includes("shiny")) {
                ourpoley = ourpoley.replaceAll("shiny", "");
                ourpoley = ourpoley.charAt(0).toLowerCase() + ourpoley.slice(1);
                describe(ourpoley, false);
            } else {
                describe(ourpoley, true);
            }
        });
    }
}, 50);
