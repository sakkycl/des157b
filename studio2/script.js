(function() {
    'use strict';

    //data
    async function getData(){
        try{
            const response = await fetch('data/data.json');
            if (!response.ok) {
                throw new Error('network response was not ok');
            }
            const myData = await response.json();
            return myData;
        } catch (error) {
            console.error('error getting data:', error);
            return [];
        }
    }
    getData();

    //reveal data
    async function revealData(day) {

        const data = await getData();

        //input values
        const display = document.getElementById('display');
        const imageDisplay = document.getElementById('image-display');

        if (data && data[`day${day}`]) {
            const dayData = data[`day${day}`];
            //tracker text
            display.innerHTML = `<h2>${dayData.weekday}, ${dayData.date}</h2>
            <p>Today, I had ${dayData.sleep_hours} hours of sleep. I napped for ${dayData.nap_hours} hours.</p>`;

            //tracker image
            if (dayData.sleep_hours >= 10) {
                imageDisplay.src = 'images/verynoeepy.png'; //very no eepy
            } else if (dayData.sleep_hours >= 7 && dayData.sleep_hours <= 9) {
                imageDisplay.src = 'images/noeepy.png'; //no eepy
            } else if (dayData.sleep_hours >= 4 && dayData.sleep_hours <= 6) {
                imageDisplay.src = 'images/eepy.png'; //eepy
            } else if (dayData.sleep_hours >= 0 && dayData.sleep_hours <= 3) {
                imageDisplay.src = 'images/veryeepy.png'; //very eepy
            } else {
                imageDisplay.src = 'images/verynoeepy.png'; 
            }
        } else {
            display.innerHTML = '<p>Data not found</p>';
            imageDisplay.src = 'images/verynoeepy.png';
        }
    }

    //reveal data on click
    /* document.addEventListener('DOMContentLoaded', () => {
        for (let i = 1; i <= 8; i++) {
            const div = document.getElementById(`day${i}`);
            div.addEventListener('click', () => revealData(i));
        }
    }); */

    document.addEventListener('click', function(){
        for (let i = 1; i <= 8; i++) {
            const div = document.getElementById(`day${i}`);
            div.addEventListener('click', () => revealData(i));
        }
    })
      
})()