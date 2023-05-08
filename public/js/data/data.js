class Poley {
    constructor(name, rarity) {
        this.name = name;
        this.rarity = rarity;
        this.counter = 1;
        this.worth = calculateWorth(rarity)
    }
}

function calculateWorth(poleyRarity) {
    let worth = Math.round(100 / poleyRarity);
    return worth
}

let poley = new Poley("poley", 35.3);
let shinyPoley = new Poley("shinyPoley", 0.6);

let deskPoley = new Poley("deskPoley", 9.9);
let shinyDeskPoley = new Poley("shinyDeskPoley", 0.1);

let calculatorPoley = new Poley("calculatorPoley", 5.94);
let shinyCalculatorPoley = new Poley("shinyCalculatorPoley", 0.06)

let magicPoley = new Poley("magicPoley", 0.099);
let shinyMagicPoley = new Poley("shinyMagicPoley", 0.001);

let bugPoley = new Poley("bugPoley", 0.99);
let shinyBugPoley = new Poley("shinyBugPoley", 0.01);

let pole = new Poley("pole", 9.9);
let shinyPole = new Poley("shinyPole", 0.1);

let mrPoley = new Poley("mrPoley", 15.8);
let shinyMrPoley = new Poley("shinyMrPoley", 0.2);

let boliePoley = new Poley("boliePoley", 4.95);
let shinyBoliePoley = new Poley("shinyBoliePoley", 0.05);

let gumPoley = new Poley("gumPoley", 7.92);
let shinyGumPoley = new Poley("shinyGumPoley", 0.08);

let bob = new Poley("bob", 12.89);
let shinyBob = new Poley("shinyBob", 0.11);

// world 1-1;
let crushedPoley = new Poley("crushedPoley", 9.89)
let shinyCrushedPoley = new Poley("shinyCrushedPoley", 0.11);

let grassPoley = new Poley("grassPoley", 19.8);
let shinyGrassPoley = new Poley("shinyGrassPoley", 0.2);

let milkPoley = new Poley("milkPoley", 9.9);
let shinyMilkPoley = new Poley("shinyMilkPoley", 0.1);

let moltenPoley = new Poley('moltenPoley', 4.05);
let shinyMoltenPoley = new Poley('shinyMoltenPoley', 0.45);

let polarPoley = new Poley('polarPoley', 0.495);
let shinyPolarPoley = new Poley('shinyPolarPoley', 0.005);

let portalPoley = new Poley('portalPoley', 2.97);
let shinyPortalPoley = new Poley('shinyPortalPoley', 0.03);

let ribcagePoley = new Poley('ribcagePoley', 19.8);
let shinyRibcagePoley = new Poley('shinyRibcagePoley', 0.2);

let squarePoley = new Poley('squarePoley', 9.9);
let shinySquarePoley = new Poley('shinySquarePoley', 0.1);

let stinkyPoley = new Poley('stinkyPoley', 14.85);
let shinyStinkyPoley = new Poley('shinyStinkyPoley', 0.15);

let susPoley = new Poley('susPoley', 6.93);
let shinySusPoley = new Poley('shinySusPoley', 0.07)
// world 1-2;
let treePoley = new Poley('treePoley', 9.9);
let shinyTreePoley = new Poley('shinyTreePoley', 0.1);

let logPoley = new Poley('logPoley', 4.95);
let shinyLogPoley = new Poley('shinyLogPoley', 0.05);

let rainPoley = new Poley('rainPoley', 24.75);
let shinyRainPoley = new Poley('shinyRainPoley', 0.25);

let riverPoley = new Poley('riverPoley', 7.92);
let shinyRiverPoley = new Poley('shinyRiverPoley', 0.08);

let sunPoley = new Poley('sunPoley', 14.85);
let shinySunPoley = new Poley('shinySunPoley', 0.15);

let moonPoley = new Poley('moonPoley', 19.8);
let shinyMoonPoley = new Poley('shinyMoonPoley', 0.2);

let starPoley = new Poley('starPoley', 4.95);
let shinyStarPoley = new Poley('shinyStarPoley', 0.05);

let ghostPoley = new Poley('ghostPoley', 1.98);
let shinyGhostPoley = new Poley('shinyGhostPoley', 0.02);

let stonePoley = new Poley('stonePoley', 8.91);
let shinyStonePoley = new Poley('shinyStonePoley', 0.09);

//cave poley is so rare since it is so ugly

let cavePoley = new Poley('cavePoley', 0.99);
let shinyCavePoley = new Poley('shinyCavePoley', 0.01);

// world 1-3;

let bartenderPoley = new Poley('bartenderPoley', 9.9);
let shinyBartenderPoley = new Poley('shinyBartenderPoley', 0.1);

let hatPoley = new Poley('hatPoley', 6.93);
let shinyHatPoley = new Poley('shinyHatPoley', 0.07);

let trainPoley = new Poley('trainPoley', 14.85);
let shinyTrainPoley = new Poley('shinyTrainPoley', 0.15);

let doii = new Poley('doii', 2.97);
let shinyDoii = new Poley('shinyDoii', 0.03);

let skateboardPoley = new Poley('skateboardPoley', 14.85);
let shinySkateboardPoley = new Poley('shinySkateboardPoley', 0.15);

let westernPoley = new Poley('westernPoley', 7.92);
let shinyWesternPoley = new Poley('shinyWesternPoley', 0.08);

let invertedWatermelonPoley = new Poley('invertedWatermelonPoley', 9.9);
let shinyInvertedWatermelonPoley = new Poley('shinyInvertedWatermelonPoley', 0.1);

let tumbleweedPoley = new Poley("tumbleweedPoley", 14.85);
let shinyTumbleweedPoley = new Poley('shinyTumbleweedPoley', 0.15);

let gunPoley = new Poley('gunPoley', 5.94);
let shinyGunPoley = new Poley('shinyGunPoley', 0.06);

let cowboyPoley = new Poley("cowboyPoley", 10.89);
let shinyCowboyPoley = new Poley("shinyCowboyPoley", 0.11);

let poleys = [poley, shinyPoley, deskPoley, shinyDeskPoley, calculatorPoley, shinyCalculatorPoley, magicPoley, shinyMagicPoley, bugPoley,
    shinyBugPoley, pole, shinyPole, mrPoley, shinyMrPoley, boliePoley, shinyBoliePoley, gumPoley, shinyGumPoley,
    bob, shinyBob
];

let poleysWorld1 = [crushedPoley, shinyCrushedPoley, grassPoley, shinyGrassPoley, milkPoley, shinyMilkPoley,
    moltenPoley, shinyMoltenPoley, polarPoley, shinyPolarPoley, portalPoley, shinyPortalPoley, ribcagePoley,
    shinyRibcagePoley, squarePoley, shinySquarePoley, stinkyPoley, shinyStinkyPoley, susPoley, shinySusPoley
];

let poleysWorld2 = [treePoley, shinyTreePoley, logPoley, shinyLogPoley, rainPoley, shinyRainPoley,
    riverPoley, shinyRiverPoley, sunPoley, shinySunPoley, moonPoley, shinyMoonPoley, starPoley,
    shinyStarPoley, ghostPoley, shinyGhostPoley, stonePoley, shinyStonePoley, cavePoley, shinyCavePoley
]

let poleysWorld3 = [hatPoley, shinyHatPoley, bartenderPoley, shinyBartenderPoley, trainPoley, shinyTrainPoley,
    doii, shinyDoii, skateboardPoley, shinySkateboardPoley, westernPoley, shinyWesternPoley, invertedWatermelonPoley,
    shinyInvertedWatermelonPoley, tumbleweedPoley, shinyTumbleweedPoley, gunPoley, shinyGunPoley, cowboyPoley, shinyCowboyPoley
];

const finalPoleys = poleys.concat(poleysWorld1.concat(poleysWorld2).concat(poleysWorld3));