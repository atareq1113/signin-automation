// ==UserScript==
// @name         Sign in
// @version      1
// @description  Sign in.
// @author       Abdullah Tareq
// @match        *://example.com/*
// @grant        none
// ==/UserScript==

const tab = window.jancyAPI.getTabInfo()

function changeurl() {
    window.jancyAPI.dispatchAction(`tab:${ tab.uuid }:navigate`, { url: 'https://www.example.com/' })
    console.log("function was ran")
}

const action = `tab:${ tab.tabId }:autofill`    // currently the action name has be derived using the tabId. this will probably change in the future

    // Function to find and click the button with the class name containing "dynamic-part"
    setTimeout(async function SignIn() {        // <-- need to add the async keyword so we can use the await keyword
        window.jancyAPI.dispatchAction(action, {
            which: 0,            // 0 = profile details only, 1 + (cc index) = profile details + credit card at cc index (cc indexes start at zero)
            uuid: tab.tabId,        // need to provide the tabId again 
            useSwapFieldMap: false        // true if you want to use autofill field swapping. you probably don't so just leave it false
        })
        },2000);
        
'use strict';

// Function to find and click the button with the class name containing "dynamic-part"
function clickButtonRepeatedly() {
    const button = document.querySelector('[data-bdd="sign-in-button"]');

    if (button) {
        button.click(); // Click the button
        console.log('Clicked the button.');
    } else {
        console.log('Button not found.');
    }
}

function clickButtonRepeatedly2() {
    const button = document.querySelector('[data-testid="accountLink"]');

    if (button) {
        button.click(); // Click the button
        console.log('Clicked the button.');
    } else {
        console.log('Button not found.');
    }
}

// Set an interval to repeat the button click every 2 seconds (2000 milliseconds)
setInterval(clickButtonRepeatedly, 1000); // Adjust time as needed
setTimeout(clickButtonRepeatedly2, 1000); // Adjust time as needed
setInterval(changeurl, 1000); // Adjust time as needed
