'use strict'

let username = prompt('What is your name?').toUpperCase();
console.log('Hi' + username + 'lets play a game!');

let whereImFrom = prompt('Was I born in Washington?').toLowerCase();
if (whereImFrom === 'yes' || whereImFrom === 'y') {
    console.log('No, I was actually born in California.');
    } else if (whereImFrom === 'no' || whereImFrom === 'n') {
        console.log('Correct, I was actually born in California');
} else {
    console.log('You need to answer with a \'yes\' or a \'no\'');

}


let howOldAmI = prompt('Am I older than 24?').toLowerCase();
if (howOldAmI === 'yes' || howOldAmI === 'y') {
    console.log('Sorry, I am actually exactly 24 years old');
    } else if (howOldAmI === 'no' || howOldAmI === 'n') {
        console.log('Correct, I am exactly 24 years old');
} else {
    console.log('You need to answer with a \'yes\' or a \'no\'');

}


let myFavoriteSport = prompt('Is baseball the best sport?').toLowerCase();
if (myFavoriteSport === 'yes' || myFavoriteSport === 'y') {
    console.logt('Correct! It is the best sport and my favorite');
    } else if (myFavoriteSport === 'no' || myFavoriteSport === 'n') {
        console.log('You are incorrect, do you play soccer or something?');
} else {
    console.log('You need to answer with a \'yes\' or a \'no\'');

}


let theBestSeason = prompt('Is winter my favorite seasn?').toLowerCase();
if (theBestSeason === 'yes' || theBestSeason === 'y') {
    console.log('Correct! Pray for snow!');
    } else if (theBestSeason === 'no' || theBestSeason === 'n') {
        console.log('That is incorrect. Winter is the superior season');
} else {
    console.log('You need to answer with a \'yes\' or a \'no\'');

}


let birthMonth = prompt('Was I born in December?').toLowerCase();
if (birthMonth === 'yes' || birthMonth === 'y') {
    console.log('Correct! Two days before Christmas!');
    } else if (birthMonth === 'no' || birthMonth === 'n') {
        console.log('Sorry, that is incorrect. I was born in December, just two days before Christmas!');
} else {
    console.log('You need to answer with a \'yes\' or a \'no\'');

}

