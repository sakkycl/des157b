(function() {
    'use strict';

    //input values
    const header = document.querySelector('header');
    const pancakebtn = document.querySelector('#pancakebtn');
    const wafflebtn = document.querySelector('#wafflebtn');
    const gamecontrol = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');

    //pancake option
    pancakebtn.addEventListener('click', function(){

        //gather ingredients
        
        //gather ingredients header
        header.innerHTML = '<h1>GATHER INGREDIENTS</h1>';
        //quit button
        gamecontrol.innerHTML = '<button id="quitbtn">QUIT GAME</button>';
        document.getElementById('quitbtn').addEventListener("click", function(){
            location.reload();
        });
        //gather ingredients content
        game.innerHTML = '<div id="ingredients"><div id="flour"><img src="images/flour.png" alt="flour"><p>FLOUR</p></div><div id="egg"><img src="images/egg.png" alt="egg"><p>EGG</p> </div><div id="milk"><img src="images/milk.png" alt="milk"><p>MILK</p></div><div id="butter"><img src="images/butter.png" alt="butter"><p>BUTTER</p></div> </div> <div id="ingredients2"> <div id="bakingpowder"><img src="images/bakingpowder.png" alt="bakingpowder"><p>BAKING POWDER</p></div> <div id="sugar"><img src="images/sugar.png" alt="sugar"><p>SUGAR</p></div> <div id="salt"><img src="images/salt.png" alt="salt"><p>SALT</p></div> <div id="cookingoil"><img src="images/cookingoil.png" alt="cookingoil"><p>COOKING OIL</p></div></div>';

        //ingredients popups

        //input values
        const flour = document.querySelector('#flour');
        const egg = document.querySelector('#egg');
        const milk = document.querySelector('#milk');
        const butter = document.querySelector('#butter');
        const bakingpowder = document.querySelector('#bakingpowder');
        const sugar = document.querySelector('#sugar');
        const salt = document.querySelector('#salt');
        const cookingoil = document.querySelector('#cookingoil');

        //popups
        const popups = [
            {
            popup: document.getElementById('flourpopup'),
            popuptext: document.getElementById('flourtext'),
            textSet: [
                ['First message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('eggpopup'),
            popuptext: document.getElementById('eggtext'),
            textSet: [
                ['First message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('milkpopup'),
            popuptext: document.getElementById('milktext'),
            textSet: [
                ['First message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('butterpopup'),
            popuptext: document.getElementById('buttertext'),
            textSet: [
                ['First message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('bakingpowderpopup'),
            popuptext: document.getElementById('bakingpowdertext'),
            textSet: [
                ['First message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('sugarpopup'),
            popuptext: document.getElementById('sugartext'),
            textSet: [
                ['First message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('saltpopup'),
            popuptext: document.getElementById('salttext'),
            textSet: [
                ['First message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('cookingoilpopup'),
            popuptext: document.getElementById('cookingoiltext'),
            textSet: [
                ['First message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            }
        ];
        //popups text
        function changeText(index) {
            const popupObj = popups[index];
            if (popupObj.changeCount < 5) {
            popupObj.popuptext.textContent = popupObj.textSet[popupObj.currentSetIndex][popupObj.changeCount];
            popupObj.changeCount++;
            } else {
            popupObj.popup.classList.add('hidden');
            document.removeEventListener('keydown', popupObj.keydownHandler);
            popupObj.popup.removeEventListener('click', popupObj.clickHandler);
            }
            popupObj.opened = true;
            checkAllOpened();
        }
        //open popups
        function openpopup(index) {
            const popupObj = popups[index];
            //popupObj.popuptext.textContent = '';
            popupObj.changeCount = 0;
            popupObj.currentSetIndex = (popupObj.currentSetIndex + 1) % popupObj.textSet.length;
            popupObj.popup.classList.remove('hidden');

            popupObj.keydownHandler = () => changeText(index);
            popupObj.clickHandler = () => changeText(index);

            document.addEventListener('keydown', popupObj.keydownHandler);
            popupObj.popup.addEventListener('click', popupObj.clickHandler);
        }
        //check opened popups
        function checkAllOpened() {
            if (popups.every(popup => popup.opened)) {
                gamecontrol.innerHTML = '<button id="cookbtn">COOK</button> <button id="quitbtn">QUIT GAME</button>';
                document.getElementById('cookbtn').addEventListener("click", function(){
                    game.innerHTML = '<p>(pretend cooking animation is here)</p>';
                });
                document.getElementById('quitbtn').addEventListener("click", function(){
                    location.reload();
                });
                gamecontrol.style.flexDirection = 'column';
                gamecontrol.style.paddingLeft = '25%';
                gamecontrol.style.paddingRight = '25%';
            }
          }
        flour.addEventListener('click', () => openpopup(0));
        egg.addEventListener('click', () => openpopup(1));
        milk.addEventListener('click', () => openpopup(2));
        butter.addEventListener('click', () => openpopup(3));
        bakingpowder.addEventListener('click', () => openpopup(4));
        sugar.addEventListener('click', () => openpopup(5));
        salt.addEventListener('click', () => openpopup(6));
        cookingoil.addEventListener('click', () => openpopup(7));

    })

    //waffle option
    wafflebtn.addEventListener('click', function(){

        //gather ingredients
        
        //gather ingredients header
        header.innerHTML = '<h1>GATHER INGREDIENTS</h1>';
        //quit button
        gamecontrol.innerHTML = '<button id="quitbtn">QUIT GAME</button>';
        document.getElementById('quitbtn').addEventListener("click", function(){
            location.reload();
        });
        //gather ingredients content
        game.innerHTML = '<div id="ingredients"><div id="flour"><img src="images/flour.png" alt="flour"><p>FLOUR</p></div><div id="egg"><img src="images/egg.png" alt="egg"><p>EGG</p> </div><div id="milk"><img src="images/milk.png" alt="milk"><p>MILK</p></div><div id="butter"><img src="images/butter.png" alt="butter"><p>BUTTER</p></div> </div> <div id="ingredients2"> <div id="bakingpowder"><img src="images/bakingpowder.png" alt="bakingpowder"><p>BAKING POWDER</p></div> <div id="sugar"><img src="images/sugar.png" alt="sugar"><p>SUGAR</p></div> <div id="salt"><img src="images/salt.png" alt="salt"><p>SALT</p></div> <div id="vanillaextract"><img src="images/vanillaextract.png" alt="vanillaextract"><p>VANILLA EXTRACT</p></div></div>';

        //ingredients popups

        //input values
        const flour = document.querySelector('#flour');
        const egg = document.querySelector('#egg');
        const milk = document.querySelector('#milk');
        const butter = document.querySelector('#butter');
        const bakingpowder = document.querySelector('#bakingpowder');
        const sugar = document.querySelector('#sugar');
        const salt = document.querySelector('#salt');
        const vanillaextract = document.querySelector('#vanillaextract');

        //popups
        const popups = [
            {
            popup: document.getElementById('flourpopup'),
            popuptext: document.getElementById('flourtext'),
            textSet: [
                ['First message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('eggpopup'),
            popuptext: document.getElementById('eggtext'),
            textSet: [
                ['First message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('milkpopup'),
            popuptext: document.getElementById('milktext'),
            textSet: [
                ['First message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 3A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('butterpopup'),
            popuptext: document.getElementById('buttertext'),
            textSet: [
                ['First message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 4A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('bakingpowderpopup'),
            popuptext: document.getElementById('bakingpowdertext'),
            textSet: [
                ['First message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 5A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('sugarpopup'),
            popuptext: document.getElementById('sugartext'),
            textSet: [
                ['First message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 6A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('saltpopup'),
            popuptext: document.getElementById('salttext'),
            textSet: [
                ['First message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 7A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('vanillaextractpopup'),
            popuptext: document.getElementById('vanillaextracttext'),
            textSet: [
                ['First message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 8A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            }
        ];
        //popups text
        function changeText(index) {
            const popupObj = popups[index];
            if (popupObj.changeCount < 5) {
            popupObj.popuptext.textContent = popupObj.textSet[popupObj.currentSetIndex][popupObj.changeCount];
            popupObj.changeCount++;
            } else {
            popupObj.popup.classList.add('hidden');
            document.removeEventListener('keydown', popupObj.keydownHandler);
            popupObj.popup.removeEventListener('click', popupObj.clickHandler);
            }
            popupObj.opened = true;
            checkAllOpened();
        }
        //open popups
        function openpopup(index) {
            const popupObj = popups[index];
            //popupObj.popuptext.textContent = '';
            popupObj.changeCount = 0;
            popupObj.currentSetIndex = (popupObj.currentSetIndex + 1) % popupObj.textSet.length;
            popupObj.popup.classList.remove('hidden');

            popupObj.keydownHandler = () => changeText(index);
            popupObj.clickHandler = () => changeText(index);

            document.addEventListener('keydown', popupObj.keydownHandler);
            popupObj.popup.addEventListener('click', popupObj.clickHandler);
        }
        //check opened popups
        function checkAllOpened() {
            if (popups.every(popup => popup.opened)) {
                gamecontrol.innerHTML = '<button id="cookbtn">COOK</button> <button id="quitbtn">QUIT GAME</button>';
                document.getElementById('cookbtn').addEventListener("click", function(){
                    game.innerHTML = '<p>(pretend cooking animation is here)</p>';
                });
                document.getElementById('quitbtn').addEventListener("click", function(){
                    location.reload();
                });
                gamecontrol.style.flexDirection = 'column';
                gamecontrol.style.paddingLeft = '25%';
                gamecontrol.style.paddingRight = '25%';
            }
          }
        flour.addEventListener('click', () => openpopup(0));
        egg.addEventListener('click', () => openpopup(1));
        milk.addEventListener('click', () => openpopup(2));
        butter.addEventListener('click', () => openpopup(3));
        bakingpowder.addEventListener('click', () => openpopup(4));
        sugar.addEventListener('click', () => openpopup(5));
        salt.addEventListener('click', () => openpopup(6));
        vanillaextract.addEventListener('click', () => openpopup(7));

        /* //header
        header.innerHTML = '<h1>GATHER INGREDIENTS</h1>';
        //quit button
        gamecontrol.innerHTML = '<button id="quitbtn">QUIT GAME</button>';
        document.getElementById('quitbtn').addEventListener("click", function(){
            location.reload();
        });
        //game starts
        game.innerHTML = '<div id="ingredients"> <div id="flour"><img src="images/flour.png" alt="flour"><p>FLOUR</p></div> <div id="egg"><img src="images/egg.png" alt="egg"><p>EGG</p> </div><div id="milk"><img src="images/milk.png" alt="milk"><p>MILK</p></div> <div id="butter"><img src="images/butter.png" alt="butter"><p>BUTTER</p></div></div>'; */
        
    })

})()