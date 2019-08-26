'use strict'

//These variables are used to determine which part of the body is attacked and defended. 
let ninjaOneAtt;
let ninjaOneDef;
let ninjaTwoAtt;
let ninjaTwoDef;

//This is the standard damage dealt with out the weapon. 
let ninjaOneDMG = 20;
let ninjaTwoDMG = 20;

//This is additional damage which is added after particular body part is critically injured.
let ninjaOneCriticalDMG = 10;
let ninjaTwoCriticalDMG = 10;

//Stadrad health. 
let ninjaOneHP = 100;
let ninjaTwoHP = 100;

//These variables are used to store values from selected weapons. 
let ninjaOneWeapon = 0;
let ninjaTwoWeapon = 0;

//These variables are used to store values from selected armor. 
let ninjaOneHeadArmor = 0;
let ninjaOneTorsoArmor = 0;
let ninjaOneArmsArmor = 0;
let ninjaOneLegsArmor = 0;

let ninjaTwoHeadArmor = 0;
let ninjaTwoTorsoArmor = 0;
let ninjaTwoArmsArmor = 0;
let ninjaTwoLegsArmor = 0;

//These variables are used to count hits that damaged particular body part. 
let ninjaOneHeadCounter = 0;
let ninjaOneTorsoCounter = 0;
let ninjaOneArmsCounter = 0;
let ninjaOneLegsCounter = 0;

let ninjaTwoHeadCounter = 0;
let ninjaTwoTorsoCounter = 0;
let ninjaTwoArmsCounter = 0;
let ninjaTwoLegsCounter = 0;

//Most of the code below is DOM manipulation and selections of each player. 

function startTheGame() {
    document.getElementById("submitButtonWrapOne").style.display = "block";
    document.getElementById("startButtonWrap").style.display = "none";
    document.getElementById("ninjaTwoWrap").style.display = "none";
    document.getElementById("oneHP").style.display = "block";
    document.getElementById("selectWrapOne").style.display = "block";
    document.getElementById("arena").style.marginTop = "40px";
}

function submitOne() {
    document.getElementById("submitButtonWrapOne").style.display = "none";
    document.getElementById("submitButtonWrapTwo").style.display = "block";
    document.getElementById("ninjaTwoWrap").style.display = "inline-block";
    document.getElementById("ninjaOneWrap").style.display = "none";
    document.getElementById("twoHP").style.display = "block";
    document.getElementById("oneHP").style.display = "none";
    document.getElementById("selectWrapTwo").style.display = "block";
    document.getElementById("selectWrapOne").style.display = "none";
}

function submitTwo() {
    document.getElementById("submitButtonWrapOne").style.display = "none";
    document.getElementById("submitButtonWrapTwo").style.display = "none";
    document.getElementById("fightButtonWrap").style.display = "block";
    document.getElementById("ninjaOneWrap").style.display = "inline-block";
    document.getElementById("oneHP").style.display = "block";
    document.getElementById("selectWrapTwo").style.display = "none";
    document.getElementById("arena").style.marginTop = "140px";
}

function fightGoesOn() {
    startTheGame();
    document.getElementById("armorWrapOne").style.display = "none";
    document.getElementById("armorWrapTwo").style.display = "none";
    document.getElementById("weaponWrapOne").style.display = "none";
    document.getElementById("weaponWrapTwo").style.display = "none";
    document.getElementById("fightGoesOnWrap").style.display = "none";
}

function ninjaOneWeaponChoice() {
    let check1 = document.getElementById("fistOneWeapon");
    let check2 = document.getElementById("daggerOneWeapon");
    let check3 = document.getElementById("swordOneWeapon");
    let check4 = document.getElementById("flailOneWeapon");
    if(check1.checked == true) {
        ninjaOneWeapon = 0;
        document.getElementById("fistOne").style.display = "block";
        document.getElementById("daggerOne").style.display = "none";
        document.getElementById("swordOne").style.display = "none";
        document.getElementById("flailOne").style.display = "none";
    } else if (check2.checked == true) {
        ninjaOneWeapon = 5;
        document.getElementById("fistOne").style.display = "none";
        document.getElementById("daggerOne").style.display = "block";
        document.getElementById("swordOne").style.display = "none";
        document.getElementById("flailOne").style.display = "none";
    } else if (check3.checked == true) {
        ninjaOneWeapon = 10;
        document.getElementById("fistOne").style.display = "none";
        document.getElementById("daggerOne").style.display = "none";
        document.getElementById("swordOne").style.display = "block";
        document.getElementById("flailOne").style.display = "none";
    } else if (check4.checked == true) {
        ninjaOneWeapon = 15;
        document.getElementById("fistOne").style.display = "none";
        document.getElementById("daggerOne").style.display = "none";
        document.getElementById("swordOne").style.display = "none";
        document.getElementById("flailOne").style.display = "block";
    }
}

function ninjaTwoWeaponChoice() {
    let check1 = document.getElementById("fistTwoWeapon");
    let check2 = document.getElementById("daggerTwoWeapon");
    let check3 = document.getElementById("swordTwoWeapon");
    let check4 = document.getElementById("flailTwoWeapon");
    if(check1.checked == true) {
        ninjaTwoWeapon = 0;
        document.getElementById("fistTwo").style.display = "block";
        document.getElementById("daggerTwo").style.display = "none";
        document.getElementById("swordTwo").style.display = "none";
        document.getElementById("flailTwo").style.display = "none";
    } else if (check2.checked == true) {
        ninjaTwoWeapon = 5;
        document.getElementById("fistTwo").style.display = "none";
        document.getElementById("daggerTwo").style.display = "block";
        document.getElementById("swordTwo").style.display = "none";
        document.getElementById("flailTwo").style.display = "none";
    } else if (check3.checked == true) {
        ninjaTwoWeapon = 10;
        document.getElementById("fistTwo").style.display = "none";
        document.getElementById("daggerTwo").style.display = "none";
        document.getElementById("swordTwo").style.display = "block";
        document.getElementById("flailTwo").style.display = "none";
    } else if (check4.checked == true) {
        ninjaTwoWeapon = 15;
        document.getElementById("fistTwo").style.display = "none";
        document.getElementById("daggerTwo").style.display = "none";
        document.getElementById("swordTwo").style.display = "none";
        document.getElementById("flailTwo").style.display = "block";
    }
}

function ninjaOneArmor() {
    let check1 = document.getElementById("headOneArmor");
    let check2 = document.getElementById("torsoOneArmor");
    let check3 = document.getElementById("armsOneArmor");
    let check4 = document.getElementById("legsOneArmor");
    if(check1.checked == true) {
        ninjaOneHeadArmor = 5;
        ninjaOneTorsoArmor = 0;
        ninjaOneArmsArmor = 0;
        ninjaOneLegsArmor = 0;
        document.getElementById("circle").style.background = "silver";
        document.getElementById("triangle-down").style.borderTop = "100px solid red";
        document.getElementById("left-hand").style.backgroundColor = "red";
        document.getElementById("right-hand").style.backgroundColor = "red";
        document.getElementById("legs").style.borderLeft = "5px solid red";
        document.getElementById("legs").style.borderRight = "5px solid red";
    } else if (check2.checked == true) {
        ninjaOneHeadArmor = 0;
        ninjaOneTorsoArmor = 5;
        ninjaOneArmsArmor = 0;
        ninjaOneLegsArmor = 0;
        document.getElementById("circle").style.background = "red";
        document.getElementById("triangle-down").style.borderTop = "100px solid silver";
        document.getElementById("left-hand").style.backgroundColor = "red";
        document.getElementById("right-hand").style.backgroundColor = "red";
        document.getElementById("legs").style.borderLeft = "5px solid red";
        document.getElementById("legs").style.borderRight = "5px solid red";
    } else if (check3.checked == true) {
        ninjaOneHeadArmor = 0;
        ninjaOneTorsoArmor = 0;
        ninjaOneArmsArmor = 5;
        ninjaOneLegsArmor = 0;
        document.getElementById("circle").style.background = "red";
        document.getElementById("triangle-down").style.borderTop = "100px solid red";
        document.getElementById("left-hand").style.backgroundColor = "silver";
        document.getElementById("right-hand").style.backgroundColor = "silver";
        document.getElementById("legs").style.borderLeft = "5px solid red";
        document.getElementById("legs").style.borderRight = "5px solid red";
    } else if (check4.checked == true) {
        ninjaOneHeadArmor = 0;
        ninjaOneTorsoArmor = 0;
        ninjaOneArmsArmor = 0;
        ninjaOneLegsArmor = 5;
        document.getElementById("circle").style.background = "red";
        document.getElementById("triangle-down").style.borderTop = "100px solid red";
        document.getElementById("left-hand").style.backgroundColor = "red";
        document.getElementById("right-hand").style.backgroundColor = "red";
        document.getElementById("legs").style.borderLeft = "5px solid silver";
        document.getElementById("legs").style.borderRight = "5px solid silver";
    }
}

function ninjaTwoArmor() {
    let check1 = document.getElementById("headTwoArmor");
    let check2 = document.getElementById("torsoTwoArmor");
    let check3 = document.getElementById("armsTwoArmor");
    let check4 = document.getElementById("legsTwoArmor");
    if(check1.checked == true) {
        ninjaTwoHeadArmor = 5;
        ninjaTwoTorsoArmor = 0;
        ninjaTwoArmsArmor = 0;
        ninjaTwoLegsArmor = 0;
        document.getElementById("circle2").style.background = "silver";
        document.getElementById("triangle-down2").style.borderTop = "100px solid black";
        document.getElementById("left-hand2").style.backgroundColor = "black";
        document.getElementById("right-hand2").style.backgroundColor = "black";
        document.getElementById("legs2").style.borderLeft = "5px solid black";
        document.getElementById("legs2").style.borderRight = "5px solid black";
    } else if (check2.checked == true) {
        ninjaTwoHeadArmor = 0;
        ninjaTwoTorsoArmor = 5;
        ninjaTwoArmsArmor = 0;
        ninjaTwoLegsArmor = 0;
        document.getElementById("circle2").style.background = "black";
        document.getElementById("triangle-down2").style.borderTop = "100px solid silver";
        document.getElementById("left-hand2").style.backgroundColor = "black";
        document.getElementById("right-hand2").style.backgroundColor = "black";
        document.getElementById("legs2").style.borderLeft = "5px solid black";
        document.getElementById("legs2").style.borderRight = "5px solid black";
    } else if (check3.checked == true) {
        ninjaTwoHeadArmor = 0;
        ninjaTwoTorsoArmor = 0;
        ninjaTwoArmsArmor = 5;
        ninjaTwoLegsArmor = 0;
        document.getElementById("circle2").style.background = "black";
        document.getElementById("triangle-down2").style.borderTop = "100px solid black";
        document.getElementById("left-hand2").style.backgroundColor = "silver";
        document.getElementById("right-hand2").style.backgroundColor = "silver";
        document.getElementById("legs2").style.borderLeft = "5px solid black";
        document.getElementById("legs2").style.borderRight = "5px solid black";
    } else if (check4.checked == true) {
        ninjaTwoHeadArmor = 0;
        ninjaTwoTorsoArmor = 0;
        ninjaTwoArmsArmor = 0;
        ninjaTwoLegsArmor = 5;
        document.getElementById("circle2").style.background = "black";
        document.getElementById("triangle-down2").style.borderTop = "100px solid black";
        document.getElementById("left-hand2").style.backgroundColor = "black";
        document.getElementById("right-hand2").style.backgroundColor = "black";
        document.getElementById("legs2").style.borderLeft = "5px solid silver";
        document.getElementById("legs2").style.borderRight = "5px solid silver";
    }
}

//Both, attack and defence of both fighters is represented by same values: head: 1; toros: 2; arms: 3; legs: 4. 
//Thus we just need to check if attack === defence is true, no DMG is dealt, if false - DMG is dealt.
function ninjaOneAttack() {
    let check1 = document.getElementById("headOneA");
    let check2 = document.getElementById("torsoOneA");
    let check3 = document.getElementById("armsOneA");
    let check4 = document.getElementById("legsOneA");
    if(check1.checked == true) {
        ninjaOneAtt = 1;
    } else if (check2.checked == true) {
        ninjaOneAtt = 2;
    } else if (check3.checked == true) {
        ninjaOneAtt = 3;
    } else if (check4.checked == true) {
        ninjaOneAtt = 4;
    } else {
        ninjaOneAtt = 0; // Nulio neužfiksuoja, tai countTurn() naudoju "undefined"
    }
    console.log(ninjaOneAtt + ' Ninja One Attack');
}

function ninjaOneDefend() {
    let check1 = document.getElementById("headOneD");
    let check2 = document.getElementById("torsoOneD");
    let check3 = document.getElementById("armsOneD");
    let check4 = document.getElementById("legsOneD");
    if(check1.checked == true) {
        ninjaOneDef = 1;
    } else if (check2.checked == true) {
        ninjaOneDef = 2;
    } else if (check3.checked == true) {
        ninjaOneDef = 3;
    } else if (check4.checked == true) {
        ninjaOneDef = 4;
    } else {
        ninjaOneDef = 0;
    }
    console.log(ninjaOneDef + ' Ninja One Defence');
}

function ninjaTwoAttack() {
    let check1 = document.getElementById("headTwoA");
    let check2 = document.getElementById("torsoTwoA");
    let check3 = document.getElementById("armsTwoA");
    let check4 = document.getElementById("legsTwoA");
    if(check1.checked == true) {
        ninjaTwoAtt = 1;
    } else if (check2.checked == true) {
        ninjaTwoAtt = 2;
    } else if (check3.checked == true) {
        ninjaTwoAtt = 3;
    } else if (check4.checked == true) {
        ninjaTwoAtt = 4;
    } else {
        ninjaTwoAtt = 0;
    }
    console.log(ninjaTwoAtt + ' Ninja Two Attack');
}

function ninjaTwoDefend() {
    let check1 = document.getElementById("headTwoD");
    let check2 = document.getElementById("torsoTwoD");
    let check3 = document.getElementById("armsTwoD");
    let check4 = document.getElementById("legsTwoD");
    if(check1.checked == true) {
        ninjaTwoDef = 1;
    } else if (check2.checked == true) {
        ninjaTwoDef = 2;
    } else if (check3.checked == true) {
        ninjaTwoDef = 3;
    } else if (check4.checked == true) {
        ninjaTwoDef = 4;
    } else {
        ninjaTwoDef = 0; 
    }
    console.log(ninjaTwoDef + ' Ninja Two Defence');
}

//This is the main function to calculate results of each Turn. Result for each fighter is very simple:
//If no damage is dealt - no change; if damage is deal - calculate the damage.
function countTurn() {
    document.getElementById("fightButtonWrap").style.display = "none";
    document.getElementById("fightGoesOnWrap").style.display = "block";

    if(ninjaOneAtt === ninjaTwoDef) {
        ninjaTwoHP = ninjaTwoHP;
    } else if (ninjaOneAtt == undefined) {
        ninjaTwoHP = ninjaTwoHP;
    } else {
        if(ninjaOneAtt === 1) {
            if(ninjaTwoHeadCounter >= 2) {
                document.getElementById("circle2").style.background = "green";
                ninjaTwoHeadCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon + ninjaOneCriticalDMG - ninjaTwoHeadArmor);
            } else {
                ninjaTwoHeadCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon - ninjaTwoHeadArmor);
            }
        } else if (ninjaOneAtt === 2) {
            if(ninjaTwoTorsoCounter >= 2) {
                document.getElementById("triangle-down2").style.borderTop = "100px solid green";
                ninjaTwoTorsoCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon + ninjaOneCriticalDMG - ninjaTwoTorsoArmor);
            } else {
                ninjaTwoTorsoCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon - ninjaTwoTorsoArmor);
            }
        } else if (ninjaOneAtt === 3) {
            if(ninjaTwoArmsCounter >= 2) {
                document.getElementById("left-hand2").style.backgroundColor = "green";
                document.getElementById("right-hand2").style.backgroundColor = "green";
                ninjaTwoArmsCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon + ninjaOneCriticalDMG - ninjaTwoArmsArmor);
            } else {
                ninjaTwoArmsCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon - ninjaTwoArmsArmor);
            }
        } else if (ninjaOneAtt === 4) {
            if(ninjaTwoLegsCounter >= 2) {
                document.getElementById("legs2").style.borderLeft = "5px solid green";
                document.getElementById("legs2").style.borderRight = "5px solid green";
                ninjaTwoLegsCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon + ninjaOneCriticalDMG - ninjaTwoLegsArmor);
            } else {
                ninjaTwoLegsCounter += 1;
                ninjaTwoHP -= (ninjaOneDMG + ninjaOneWeapon - ninjaTwoLegsArmor);
            }
        }
    }

    if(ninjaTwoAtt === ninjaOneDef) {
        ninjaOneHP = ninjaOneHP;
    } else if (ninjaTwoAtt == undefined) {
        ninjaOneHP = ninjaOneHP;
    } else {
        if(ninjaTwoAtt === 1) {
            if(ninjaOneHeadCounter >= 2) {
                document.getElementById("circle").style.background = "green";
                ninjaOneHeadCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon + ninjaTwoCriticalDMG - ninjaOneHeadArmor);
            } else {
                ninjaOneHeadCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon - ninjaOneHeadArmor);
            }
        } else if (ninjaTwoAtt === 2) {
            if(ninjaOneTorsoCounter >= 2) {
                document.getElementById("triangle-down").style.borderTop = "100px solid green";
                ninjaOneTorsoCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon + ninjaTwoCriticalDMG - ninjaOneTorsoArmor);
            } else {
                ninjaOneTorsoCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon - ninjaOneTorsoArmor);
            }
        } else if (ninjaTwoAtt === 3) {
            if(ninjaOneArmsCounter >= 2) {
                document.getElementById("left-hand").style.backgroundColor = "green";
                document.getElementById("right-hand").style.backgroundColor = "green";
                ninjaOneArmsCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon + ninjaTwoCriticalDMG - ninjaOneArmsArmor);
            } else {
                ninjaOneArmsCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon - ninjaOneArmsArmor);
            }
        } else if (ninjaTwoAtt === 4) {
            if(ninjaOneLegsCounter >= 2) {
                document.getElementById("legs").style.borderLeft = "5px solid green";
                document.getElementById("legs").style.borderRight = "5px solid green";
                ninjaOneLegsCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon + ninjaTwoCriticalDMG - ninjaOneLegsArmor);
            } else {
                ninjaOneLegsCounter += 1;
                ninjaOneHP -= (ninjaTwoDMG + ninjaTwoWeapon - ninjaOneLegsArmor);
            }
        }
    }

    if(ninjaOneHP <= 0 && ninjaTwoHP <= 0) {
        document.getElementById("oneHP").style.display = "none";
        document.getElementById("circle").style.display = "none";
        document.getElementById("twoHP").style.display = "none";
        document.getElementById("circle2").style.display = "none";
        document.getElementById("end").style.display = "block";
        document.getElementById("end").style.marginBottom = "100px";
        document.getElementById("lost").innerHTML = "BOTH ARE DEAD! WHAT A FIGHT...";
        document.getElementById("arena").style.marginTop = "100px";
        document.getElementById("fightButtonWrap").style.display = "none";
        document.getElementById("fightGoesOnWrap").style.display = "none";
        document.getElementById("newGameWrap").style.display = "block";
        console.log('Both ninjas are dead!');
    } else if (ninjaOneHP <= 0 && ninjaTwoHP > 0) {
        document.getElementById("oneHP").style.display = "none";
        document.getElementById("circle").style.display = "none";
        document.getElementById("end").style.display = "block";
        document.getElementById("arena").style.marginTop = "100px";
        document.getElementById("fightButtonWrap").style.display = "none";
        document.getElementById("fightGoesOnWrap").style.display = "none";
        document.getElementById("newGameWrap").style.display = "block";
        console.log('Ninja One lost!');
    } else if (ninjaOneHP > 0 && ninjaTwoHP <= 0) {
        document.getElementById("twoHP").style.display = "none";
        document.getElementById("circle2").style.display = "none";
        document.getElementById("end").style.display = "block";
        document.getElementById("lost").innerHTML = "NINJA TWO LOST! ALL HAIL NINJA ONE!";
        document.getElementById("arena").style.marginTop = "100px";
        document.getElementById("fightButtonWrap").style.display = "none";
        document.getElementById("fightGoesOnWrap").style.display = "none";
        document.getElementById("newGameWrap").style.display = "block";
        console.log('Ninja Two lost!');
    } else {
        document.getElementById("oneHP").innerHTML = 'HP: ' + ninjaOneHP;
        document.getElementById("twoHP").innerHTML = 'HP: ' + ninjaTwoHP;
    }
}
