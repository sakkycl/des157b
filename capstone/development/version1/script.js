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

        //header
        header.innerHTML = '<h1>GATHER INGREDIENTS</h1>';

        //quit button
        gamecontrol.innerHTML = '<button id="quitbtn">QUIT GAME</button>';
        document.getElementById('quitbtn').addEventListener("click", function(){
            location.reload();
        });

        //game starts
        game.innerHTML = '<div id="ingredients"><div id="flour"><img src="images/flour.png" alt="flour"><p>FLOUR</p></div><div id="egg"><img src="images/egg.png" alt="egg"><p>EGG</p> </div><div id="milk"><img src="images/milk.png" alt="milk"><p>MILK</p></div><div id="butter"><img src="images/butter.png" alt="butter"><p>BUTTER</p> </div></div>';

        //input values
        const flour = document.querySelector('#flour');
        const egg = document.querySelector('#egg');

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

        flour.addEventListener('click', () => openpopup(0));
        egg.addEventListener('click', () => openpopup(1));

        function checkAllOpened() {
            if (popups.every(popup => popup.opened)) {
                gamecontrol.innerHTML = '<button id="cookbtn">COOK</button> <button id="quitbtn">QUIT GAME</button>';
                document.getElementById('quitbtn').addEventListener("click", function(){
                    location.reload();
                });
                gamecontrol.style.flexDirection = 'column';
                gamecontrol.style.paddingLeft = '25%';
                gamecontrol.style.paddingRight = '25%';
            }
          }

    })

    //waffle option
    wafflebtn.addEventListener('click', function(){

        //header
        header.innerHTML = '<h1>GATHER INGREDIENTS</h1>';

        //quit button
        gamecontrol.innerHTML = '<button id="quitbtn">QUIT GAME</button>';
        document.getElementById('quitbtn').addEventListener("click", function(){
            location.reload();
        });

        //game starts
        game.innerHTML = '<div id="ingredients"><div id="flour"><img src="images/flour.png" alt="flour"><p>FLOUR</p></div><div id="egg"><img src="images/egg.png" alt="egg"><p>EGG</p> </div><div id="milk"><img src="images/milk.png" alt="milk"><p>MILK</p></div><div id="butter"><img src="images/butter.png" alt="butter"><p>BUTTER</p> </div></div>';
        
    })

})()