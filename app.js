'use strict'

function username() {
    let username = prompt('What is your name?').toUpperCase();
    alert('Hi' + username + 'lets play a game!');
}
username();

function whereImFrom() {
    let whereImFrom = prompt('Was I born in Washington?').toLowerCase();
    if (whereImFrom === 'yes' || whereImFrom === 'y') {
        alert('No, I was actually born in California.');
    } else if (whereImFrom === 'no' || whereImFrom === 'n') {
        alert('Correct, I was actually born in California');
    } else {
        alert('You need to answer with a \'yes\' or a \'no\'');

    }
}
whereImFrom();

function howOldAmI() {
    let howOldAmI = prompt('Am I older than 24?').toLowerCase();
    if (howOldAmI === 'yes' || howOldAmI === 'y') {
        alert('Sorry, I am actually exactly 24 years old');
    } else if (howOldAmI === 'no' || howOldAmI === 'n') {
        alert('Correct, I am exactly 24 years old');
    } else {
        alert('You need to answer with a \'yes\' or a \'no\'');

    }
}
howOldAmI();

function myFavoriteSport() {
    let myFavoriteSport = prompt('Is baseball the best sport?').toLowerCase();
    if (myFavoriteSport === 'yes' || myFavoriteSport === 'y') {
        alert('Correct! It is the best sport and my favorite');
    } else if (myFavoriteSport === 'no' || myFavoriteSport === 'n') {
        alert('You are incorrect, do you play soccer or something?');
    } else {
        alert('You need to answer with a \'yes\' or a \'no\'');

    }
}
myFavoriteSport();

function theBestSeason() {
    let theBestSeason = prompt('Is winter my favorite seasn?').toLowerCase();
    if (theBestSeason === 'yes' || theBestSeason === 'y') {
        alert('Correct! Pray for snow!');
    } else if (theBestSeason === 'no' || theBestSeason === 'n') {
        alert('That is incorrect. Winter is the superior season');
    } else {
        alert('You need to answer with a \'yes\' or a \'no\'');

    }
}
theBestSeason();

function birthMonth() {
    let birthMonth = prompt('Was I born in December?').toLowerCase();
    if (birthMonth === 'yes' || birthMonth === 'y') {
        alert('Correct! Two days before Christmas!');
    } else if (birthMonth === 'no' || birthMonth === 'n') {
        alert('Sorry, that is incorrect. I was born in December, just two days before Christmas!');
    } else {
        alert('You need to answer with a \'yes\' or a \'no\'');

    }
}
birthMonth();
