"use strict";

// Dependencies
const chalk = require("chalk")

// Functions
function mainBanner(){
    console.log(chalk.magentaBright(`
    
    ██ ▄█▀ ██▀███ ▓██   ██▓ ██▓███  ▄▄▄█████▓ ▒█████   ███▄    █ 
    ██▄█▒ ▓██ ▒ ██▒▒██  ██▒▓██░  ██▒▓  ██▒ ▓▒▒██▒  ██▒ ██ ▀█   █ 
   ▓███▄░ ▓██ ░▄█ ▒ ▒██ ██░▓██░ ██▓▒▒ ▓██░ ▒░▒██░  ██▒▓██  ▀█ ██▒
   ▓██ █▄ ▒██▀▀█▄   ░ ▐██▓░▒██▄█▓▒ ▒░ ▓██▓ ░ ▒██   ██░▓██▒  ▐▌██▒   Decentralize Login System Framework
   ▒██▒ █▄░██▓ ▒██▒ ░ ██▒▓░▒██▒ ░  ░  ▒██▒ ░ ░ ████▓▒░▒██░   ▓██░                       Bought to you by CSPI
   ▒ ▒▒ ▓▒░ ▒▓ ░▒▓░  ██▒▒▒ ▒▓▒░ ░  ░  ▒ ░░   ░ ▒░▒░▒░ ░ ▒░   ▒ ▒ 
   ░ ░▒ ▒░  ░▒ ░ ▒░▓██ ░▒░ ░▒ ░         ░      ░ ▒ ▒░ ░ ░░   ░ ▒░
   ░ ░░ ░   ░░   ░ ▒ ▒ ░░  ░░         ░      ░ ░ ░ ▒     ░   ░ ░  
   ░  ░      ░     ░ ░                           ░ ░           ░ 
                   ░ ░                                           `))
}

// Main
function randomBanner(){
    const banners = [mainBanner]

    banners[Math.floor(Math.random() * banners.length)]()
}

module.exports = { randomBanner }