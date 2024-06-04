(function() {
    'use strict';

    //input values
    const header = document.querySelector('header');
    const pancakebtn = document.querySelector('#pancakebtn');
    const wafflebtn = document.querySelector('#wafflebtn');
    const gamecontrol = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');

    //usability testing
    const taskpopup = document.querySelector('#taskpopup');
    taskpopup.addEventListener('click', function(){
        taskpopup.className = 'hidden';
    })

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
                ['You are running low on flour! Lets use what we have left…', 'Wheat goes through the process of milling to produce flour. However, extreme weather conditions has impacted the production of wheat dramatically.', 'Wheat production in Argentina, the largest wheat producer in South America, was threatened by an extreme drought last year.', '—while wheat production in Kansas, a top wheat producing states, was threatened by the hard red winter.', 'As heatwaves and many other extreme weather conditions become more frequent, there may be a future when wheat and wheat products like flour is completely gone.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('eggpopup'),
            popuptext: document.getElementById('eggtext'),
            textSet: [
                ['You are running low on eggs! Hopefully this is enough for the pancake batter…', 'Second message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
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

                //cooking button
                gamecontrol.innerHTML = '<button id="cookbtn">COOK</button> <button id="quitbtn">QUIT GAME</button>';
                document.getElementById('cookbtn').addEventListener("click", function(){

                    //cooking animation
                    game.innerHTML = '<div id="cookpanimation"> <div id="cookp1"><img src="images/cookp1.png" alt="cookp1"></div> <div id="cookp2"><img src="images/cookp2.png" alt="cookp2"></div> <div id="cookp3"><img src="images/cookp3.png" alt="cookp3"></div> </div>';
                    gamecontrol.style.paddingTop = "35%";
                    //cooking header 
                    header.innerHTML = '<h1>COOKING...</h1>';
                    //cooking gamecontrol
                    gamecontrol.innerHTML = '<button id="obtainbtn">OBTAIN</button> <button id="quitbtn">QUIT GAME</button>';
                    document.getElementById('obtainbtn').addEventListener("click", function(){

                        //final touches content
                        game.innerHTML = '<div id="final"> <div id="fcake"> <div id="pcake"><img src="images/fcake.png" alt="fcake"></div><div id="scake" class="hidden"><img src="images/scake.png" alt="scake"></div><div id="bcake" class="hidden"><img src="images/bcake.png" alt="bcake"></div> </div> <div id="maplesyrup"><img src="images/maplesyrup.png" alt="maplesyrup"><p>MAPLE SYRUP</p></div> <div id="berries"><img src="images/berries.png" alt="berries"><p>BERRIES</p></div> </div>';
                        //final touches header
                        header.innerHTML = '<h1>ADD FINAL TOUCHES</h1>';
                        //final touches gamecontrol
                        gamecontrol.innerHTML = '<button id="quitbtn">QUIT GAME</button>';
                        gamecontrol.style.paddingTop = '20%';
                        document.getElementById('quitbtn').addEventListener("click", function(){
                            location.reload();
                        });
                        //final touches popups
                        //input values
                        const maplesyrup = document.querySelector('#maplesyrup');
                        const berries = document.querySelector('#berries');
                        //popups
                        const fpopups = [
                            {
                            fpopup: document.getElementById('maplesyruppopup'),
                            fpopuptext: document.getElementById('maplesyruptext'),
                            ftextSet: [
                                ['First message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
                            ],
                            fcurrentSetIndex: 0,
                            fchangeCount: 0,
                            fopened: false,
                            div: document.getElementById('scake'),
                            },
                            {
                            fpopup: document.getElementById('berriespopup'),
                            fpopuptext: document.getElementById('berriestext'),
                            ftextSet: [
                                ['First message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
                            ],
                            fcurrentSetIndex: 0,
                            fchangeCount: 0,
                            fopened: false,
                            div: document.getElementById('bcake'),
                            }
                        ];
                        //popups text
                        function fchangeText(index) {
                            const fpopupObj = fpopups[index];
                            if (fpopupObj.fchangeCount < 5) {
                            fpopupObj.fpopuptext.textContent = fpopupObj.ftextSet[fpopupObj.fcurrentSetIndex][fpopupObj.fchangeCount];
                            fpopupObj.fchangeCount++;
                            } else {
                            fpopupObj.fpopup.classList.add('hidden');
                            document.removeEventListener('keydown', fpopupObj.keydownHandler);
                            fpopupObj.fpopup.removeEventListener('click', fpopupObj.clickHandler);
                            }
                            fpopupObj.fopened = true;
                            fcheckAllOpened();
                            fpopupObj.div.classList.replace('hidden', 'showing');
                        }
                        //open popups
                        function fopenpopup(index) {
                            const fpopupObj = fpopups[index];
                            //popupObj.popuptext.textContent = '';
                            fpopupObj.fchangeCount = 0;
                            fpopupObj.fcurrentSetIndex = (fpopupObj.fcurrentSetIndex + 1) % fpopupObj.ftextSet.length;
                            fpopupObj.fpopup.classList.remove('hidden');

                            fpopupObj.keydownHandler = () => fchangeText(index);
                            fpopupObj.clickHandler = () => fchangeText(index);

                            document.addEventListener('keydown', fpopupObj.keydownHandler);
                            fpopupObj.fpopup.addEventListener('click', fpopupObj.clickHandler);
                        }
                        //check opened popups
                        function fcheckAllOpened() {
                            if (fpopups.every(fpopup => fpopup.fopened)) {

                                //plate button
                                gamecontrol.innerHTML = '<button id="platebtn">PLATE</button> <button id="quitbtn">QUIT GAME</button>';
                                document.getElementById('quitbtn').addEventListener("click", function(){
                                    location.reload();
                                });
                                document.getElementById('platebtn').addEventListener("click", function(){
                                    header.innerHTML = '<h1>THANK YOU FOR PLAYING</h1>'
                                    game.innerHTML = '';
                                    gamecontrol.innerHTML = '<div id="thankyou"> <img src="images/finpancake.png" alt="finpancake"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button id="playbtn">PLAY AGAIN</button> </div>';
                                    document.getElementById('playbtn').addEventListener("click", function(){
                                        location.reload();
                                    });
                                });
                            }

                        }
                        maplesyrup.addEventListener('click', () => fopenpopup(0));
                        berries.addEventListener('click', () => fopenpopup(1));

                    });
                    document.getElementById('quitbtn').addEventListener("click", function(){
                        location.reload();
                    });

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

        //gather ingredients popups

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
                ['You are running low on flour! Lets use what we have left…', 'Wheat goes through the process of milling to produce flour. However, extreme weather conditions has impacted the production of wheat dramatically.', 'Wheat production in Argentina, the largest wheat producer in South America, was threatened by an extreme drought last year.', '—while wheat production in Kansas, a top wheat producing states, was threatened by the hard red winter.', 'As heatwaves and many other extreme weather conditions become more frequent, there may be a future when wheat and wheat products like flour is completely gone.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('eggpopup'),
            popuptext: document.getElementById('eggtext'),
            textSet: [
                ['You are running low on eggs! Hopefully this is enough for the waffle batter…', 'Second message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
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

                //cooking button
                gamecontrol.innerHTML = '<button id="cookbtn">COOK</button> <button id="quitbtn">QUIT GAME</button>';
                document.getElementById('cookbtn').addEventListener("click", function(){

                    //cooking animation
                    game.innerHTML = '<div id="cookpanimation2"> <div id="cookw1"><img src="images/cookw1.png" alt="cookw1"></div> <div id="cookw2"><img src="images/cookw2.png" alt="cookw2"></div> </div>';
                    gamecontrol.style.paddingTop = "35%";
                    //cooking header 
                    header.innerHTML = '<h1>COOKING...</h1>';
                    //cooking gamecontrol
                    gamecontrol.innerHTML = '<button id="obtainbtn">OBTAIN</button> <button id="quitbtn">QUIT GAME</button>';
                    document.getElementById('obtainbtn').addEventListener("click", function(){

                        //final touches content
                        game.innerHTML = '<div id="final"> <div id="fwaffle"> <div id="pwaffle"><img src="images/fwaffle.png" alt="fwaffle"></div><div id="scake" class="hidden"><img src="images/scake.png" alt="scake"></div><div id="bcake" class="hidden"><img src="images/bcake.png" alt="bcake"></div> </div> <div id="maplesyrup"><img src="images/maplesyrup.png" alt="maplesyrup"><p>MAPLE SYRUP</p></div> <div id="berries"><img src="images/berries.png" alt="berries"><p>BERRIES</p></div> </div>';
                        //final touches header
                        header.innerHTML = '<h1>ADD FINAL TOUCHES</h1>';
                        //final touches gamecontrol
                        gamecontrol.innerHTML = '<button id="quitbtn">QUIT GAME</button>';
                        gamecontrol.style.paddingTop = '25%';
                        document.getElementById('quitbtn').addEventListener("click", function(){
                            location.reload();
                        });
                        //final touches popups
                        //input values
                        const maplesyrup = document.querySelector('#maplesyrup');
                        const berries = document.querySelector('#berries');
                        //popups
                        const fpopups = [
                            {
                            fpopup: document.getElementById('maplesyruppopup'),
                            fpopuptext: document.getElementById('maplesyruptext'),
                            ftextSet: [
                                ['First message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 1A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
                            ],
                            fcurrentSetIndex: 0,
                            fchangeCount: 0,
                            fopened: false,
                            div: document.getElementById('scake'),
                            },
                            {
                            fpopup: document.getElementById('berriespopup'),
                            fpopuptext: document.getElementById('berriestext'),
                            ftextSet: [
                                ['First message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Second message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Third message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fourth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Fifth message 2A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
                            ],
                            fcurrentSetIndex: 0,
                            fchangeCount: 0,
                            fopened: false,
                            div: document.getElementById('bcake'),
                            }
                        ];
                        //popups text
                        function fchangeText(index) {
                            const fpopupObj = fpopups[index];
                            if (fpopupObj.fchangeCount < 5) {
                            fpopupObj.fpopuptext.textContent = fpopupObj.ftextSet[fpopupObj.fcurrentSetIndex][fpopupObj.fchangeCount];
                            fpopupObj.fchangeCount++;
                            } else {
                            fpopupObj.fpopup.classList.add('hidden');
                            document.removeEventListener('keydown', fpopupObj.keydownHandler);
                            fpopupObj.fpopup.removeEventListener('click', fpopupObj.clickHandler);
                            }
                            fpopupObj.fopened = true;
                            fcheckAllOpened();
                            fpopupObj.div.classList.replace('hidden', 'showing');
                        }
                        //open popups
                        function fopenpopup(index) {
                            const fpopupObj = fpopups[index];
                            //popupObj.popuptext.textContent = '';
                            fpopupObj.fchangeCount = 0;
                            fpopupObj.fcurrentSetIndex = (fpopupObj.fcurrentSetIndex + 1) % fpopupObj.ftextSet.length;
                            fpopupObj.fpopup.classList.remove('hidden');

                            fpopupObj.keydownHandler = () => fchangeText(index);
                            fpopupObj.clickHandler = () => fchangeText(index);

                            document.addEventListener('keydown', fpopupObj.keydownHandler);
                            fpopupObj.fpopup.addEventListener('click', fpopupObj.clickHandler);
                        }
                        //check opened popups
                        function fcheckAllOpened() {
                            if (fpopups.every(fpopup => fpopup.fopened)) {

                                //plate button
                                gamecontrol.innerHTML = '<button id="platebtn">PLATE</button> <button id="quitbtn">QUIT GAME</button>';
                                document.getElementById('quitbtn').addEventListener("click", function(){
                                    location.reload();
                                });
                                document.getElementById('platebtn').addEventListener("click", function(){
                                    header.innerHTML = '<h1>THANK YOU FOR PLAYING</h1>'
                                    game.innerHTML = '';
                                    gamecontrol.innerHTML = '<div id="thankyou"> <img src="images/finpancake.png" alt="finpancake"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><button id="playbtn">PLAY AGAIN</button> </div>';
                                    document.getElementById('playbtn').addEventListener("click", function(){
                                        location.reload();
                                    });
                                });
                            }

                        }
                        maplesyrup.addEventListener('click', () => fopenpopup(0));
                        berries.addEventListener('click', () => fopenpopup(1));

                    });
                    document.getElementById('quitbtn').addEventListener("click", function(){
                        location.reload();
                    });

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
        
    })

})()