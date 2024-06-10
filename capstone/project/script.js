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
        header.innerHTML = '<h1>GATHER ALL INGREDIENTS</h1>';
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
                ['You are running low on flour! Lets use what we have left…', 'Wheat goes through the process of milling to produce flour.', 'However, extreme weather conditions has impacted the production of wheat dramatically.', 'Wheat production in Argentina was threatened by an extreme drought last year', '—while wheat production in Kansas was threatened by the hard red winter.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('eggpopup'),
            popuptext: document.getElementById('eggtext'),
            textSet: [
                ['You are running low on eggs! Hopefully this is enough for the pancake batter…', 'Poultry are facing the adverse affects of extreme weather conditions.', 'This can be seen through poultry farms in Africa.', 'Unable to regulate their temperature, birds may lose vital nutrients used for egg production.', 'They may reduce the number and size of eggs produced.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('milkpopup'),
            popuptext: document.getElementById('milktext'),
            textSet: [
                ['No milk... maybe water will work?', 'Dairy cows are sensitive to extreme temperatures and humidity.', 'This is increasingly apparent in the summer because of the heat and drought.', 'Heat and drought stress has shown to decrease feed intake, milk production, and livestock fertility.', 'Florida experiences a 25% loss in annual milk production, with most losses occurring in the summer.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('butterpopup'),
            popuptext: document.getElementById('buttertext'),
            textSet: [
                ['You ran out of butter! Lets do without!', 'Butter is a byproduct of dairy milk.', 'Heat and drought stress of dairy cows has shown to decrease milk production, leading to butter shortages.', 'However, the butter industry is also a significant cause of climate change.', 'It is three and a half times as damaging to the environment as plant-based spreads.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('bakingpowderpopup'),
            popuptext: document.getElementById('bakingpowdertext'),
            textSet: [
                ['Your baking powder is expired! Maybe it is still okay to use?', 'Climate change has shown to negatively impact the consistency and taste of baked goods.', 'For example, humidity effects the quality of baking powder.', 'In extremely humid weather, baking powder may absorb extra moisture in the air.', 'This leads to extra moisture in the dough, changing the quality of the final product.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('sugarpopup'),
            popuptext: document.getElementById('sugartext'),
            textSet: [
                ['You are running low on sugar! Hopefully this is enough for the pancake...', 'Some of the largest exporters of sugar are facing the adverse effects of climate change.', 'India is facing an extreme dry spell while Thailand is facing a severe drought.', 'Climate changes had led to a decrease in sugar production and increase in prices.', 'Prices for sugar and sweets in the United States increased by 8.9% in 2023.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('saltpopup'),
            popuptext: document.getElementById('salttext'),
            textSet: [
                ['You ran out of salt! You only need a pinch...', 'Commercial salt is made from rock salt, seawater, and other brines.', 'Salt production is vulnerable to rising temperatures and sea levels.', 'More and more companies are looking for sustainable methods to make salt.', 'The Syracuse Salt Company began using brine from ground water to fight against the effects of climate change.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('cookingoilpopup'),
            popuptext: document.getElementById('cookingoiltext'),
            textSet: [
                ['You are running low on cooking oil! Hopefully you can make at a couple pancakes with what you have!', 'The climate crisis effects the production of many commonly used cooking oils.', 'In 2022, droughts across South America lead to a drop in soybean oil production', '—while a drought in Canada has lead to a drop in canola oil production.', 'This lead many cooking oil prices to increase.']
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

            if (index === 0) {flour.style.filter = 'brightness(80%)';} 
            if (index === 1) {egg.style.filter = 'brightness(80%)';}
            if (index === 2) {milk.style.filter = 'brightness(80%)';}
            if (index === 3) {butter.style.filter = 'brightness(80%)';}
            if (index === 4) {bakingpowder.style.filter = 'brightness(80%)';}
            if (index === 5) {sugar.style.filter = 'brightness(80%)';}
            if (index === 6) {salt.style.filter = 'brightness(80%)';}
            if (index === 7) {cookingoil.style.filter = 'brightness(80%)';}
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
                                ['Your maple syrup is expired! Hopefully it is okay to use?', 'Extreme weather conditions has adverse effects on maple syrup production.', 'Warmer summers decreases sugar content in the sap.', 'Yearly warming also shortens tapping seasons.', 'Both conditions have reduced maple syrup yields in the industry.']
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
                                ['They are overripe…', 'Unpredictable weather conditions are affecting berry production.', 'Berries such as strawberries, raspberries, and blueberries are more susceptible to pests, diseases, and droughts.', 'This can be seen in strawberry and raspberry farms in Mexico.', 'Heat and drought stress has lead to a decrease in strawberry and raspberry quality and quantity.']
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

                            if (index === 0) {maplesyrup.style.filter = 'brightness(80%)';} 
                            if (index === 1) {berries.style.filter = 'brightness(80%)';}
                        }
                        //check opened popups
                        function fcheckAllOpened() {
                            if (fpopups.every(fpopup => fpopup.fopened)) {

                                //plate button
                                gamecontrol.innerHTML = '<button id="platebtn">PLATE</button> <button id="quitbtn">QUIT GAME</button>';
                                document.getElementById('quitbtn').addEventListener("click", function(){
                                    location.reload();
                                });
                                //plate button on click
                                document.getElementById('platebtn').addEventListener("click", function(){
                                    //thank you header
                                    header.innerHTML = '<h1>THANK YOU FOR PLAYING</h1>'
                                    //thank you game content
                                    game.innerHTML = '';
                                    //thank you game control
                                    gamecontrol.innerHTML = '<div id="thankyou"> <img src="images/finpancake.png" alt="finpancake" id="tyimg"> <h2>SUSPICIOUS PANCAKE</h2> <p>You give the pancakes a taste. Hmm… not bad. The pancakes are a bit bland but the maple syrup and berries save it. The bite leaves an unusual bitter aftertaste...</p> <button id="nextbtn">NEXT</button> </div>';
                                    document.querySelector("#tyimg").style.padding = "0";
                                    document.getElementById('nextbtn').addEventListener("click", function(){
                                        gamecontrol.innerHTML = '<div id="thankyou"> <img src="images/finpancake.png" alt="finpancake" id="tyimg"> <h2>SUSPICIOUS PANCAKE</h2> <p>As the climate crisis persist, there may be a future when our favorite foods are a luxury or completely gone. Making an effort towards sustainability is important to protect the foods you enjoy in your daily life.</p> <p>For more information, check out <a href="https://slowfoodusa.org">Slow Food USA</a></p><button id="playbtn">PLAY AGAIN</button> </div>';
                                        document.getElementById('playbtn').addEventListener("click", function(){
                                            location.reload();
                                        });
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
        header.innerHTML = '<h1>GATHER ALL INGREDIENTS</h1>';
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
                ['You are running low on flour! Lets use what we have left…', 'Wheat goes through the process of milling to produce flour.', 'However, extreme weather conditions has impacted the production of wheat dramatically.', 'Wheat production in Argentina was threatened by an extreme drought last year', '—while wheat production in Kansas was threatened by the hard red winter.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('eggpopup'),
            popuptext: document.getElementById('eggtext'),
            textSet: [
                ['You are running low on eggs! Hopefully this is enough for the pancake batter…', 'Poultry are facing the adverse affects of extreme weather conditions.', 'This can be seen through poultry farms in Africa.', 'Unable to regulate their temperature, birds may lose vital nutrients used for egg production.', 'They may reduce the number and size of eggs produced.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('milkpopup'),
            popuptext: document.getElementById('milktext'),
            textSet: [
                ['No milk... maybe water will work?', 'Dairy cows are sensitive to extreme temperatures and humidity.', 'This is increasingly apparent in the summer because of the heat and drought.', 'Heat and drought stress has shown to decrease feed intake, milk production, and livestock fertility.', 'Florida experiences a 25% loss in annual milk production, with most losses occurring in the summer.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('butterpopup'),
            popuptext: document.getElementById('buttertext'),
            textSet: [
                ['You ran out of butter! Lets do without!', 'Butter is a byproduct of dairy milk.', 'Heat and drought stress of dairy cows has shown to decrease milk production, leading to butter shortages.', 'However, the butter industry is also a significant cause of climate change.', 'It is three and a half times as damaging to the environment as plant-based spreads.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('bakingpowderpopup'),
            popuptext: document.getElementById('bakingpowdertext'),
            textSet: [
                ['Your baking powder is expired! Maybe it is still okay to use?', 'Climate change has shown to negatively impact the consistency and taste of baked goods.', 'For example, humidity effects the quality of baking powder.', 'In extremely humid weather, baking powder may absorb extra moisture in the air.', 'This leads to extra moisture in the dough, changing the quality of the final product.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('sugarpopup'),
            popuptext: document.getElementById('sugartext'),
            textSet: [
                ['You are running low on sugar! Hopefully this is enough for the pancake...', 'Some of the largest exporters of sugar are facing the adverse effects of climate change.', 'India is facing an extreme dry spell while Thailand is facing a severe drought.', 'Climate changes had led to a decrease in sugar production and increase in prices.', 'Prices for sugar and sweets in the United States increased by 8.9% in 2023.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('saltpopup'),
            popuptext: document.getElementById('salttext'),
            textSet: [
                ['You ran out of salt! You only need a pinch...', 'Commercial salt is made from rock salt, seawater, and other brines.', 'Salt production is vulnerable to rising temperatures and sea levels.', 'More and more companies are looking for sustainable methods to make salt.', 'The Syracuse Salt Company began using brine from ground water to fight against the effects of climate change.']
            ],
            currentSetIndex: 0,
            changeCount: 0,
            opened: false
            },
            {
            popup: document.getElementById('vanillaextractpopup'),
            popuptext: document.getElementById('vanillaextracttext'),
            textSet: [
                ['You ran out of vanilla extract! Lets do without!', 'Vanilla orchids are slow and difficult to grow. They are sensitive to temperature, rainfall, and humidity levels.', 'Shifts in weather patterns may lead to a reduced aroma and flavor.', 'Extreme weather events also poses a challenge for vanilla farms.', 'A tropical cyclone destroyed 30% of Madagascar’s vanilla in 2017, leading to vanilla shortages and increased prices.']
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

            if (index === 0) {flour.style.filter = 'brightness(80%)';} 
            if (index === 1) {egg.style.filter = 'brightness(80%)';}
            if (index === 2) {milk.style.filter = 'brightness(80%)';}
            if (index === 3) {butter.style.filter = 'brightness(80%)';}
            if (index === 4) {bakingpowder.style.filter = 'brightness(80%)';}
            if (index === 5) {sugar.style.filter = 'brightness(80%)';}
            if (index === 6) {salt.style.filter = 'brightness(80%)';}
            if (index === 7) {vanillaextract.style.filter = 'brightness(80%)';}
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
                                ['Your maple syrup is expired! Hopefully it is okay to use?', 'Extreme weather conditions has adverse effects on maple syrup production.', 'Warmer summers decreases sugar content in the sap.', 'Yearly warming also shortens tapping seasons.', 'Both conditions have reduced maple syrup yields in the industry.']
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
                                ['They are overripe…', 'Unpredictable weather conditions are affecting berry production.', 'Berries such as strawberries, raspberries, and blueberries are more susceptible to pests, diseases, and droughts.', 'This can be seen in strawberry and raspberry farms in Mexico.', 'Heat and drought stress has lead to a decrease in strawberry and raspberry quality and quantity.']
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

                            if (index === 0) {maplesyrup.style.filter = 'brightness(80%)';} 
                            if (index === 1) {berries.style.filter = 'brightness(80%)';}
                        }
                        //check opened popups
                        function fcheckAllOpened() {
                            if (fpopups.every(fpopup => fpopup.fopened)) {

                                //plate button
                                gamecontrol.innerHTML = '<button id="platebtn">PLATE</button> <button id="quitbtn">QUIT GAME</button>';
                                document.getElementById('quitbtn').addEventListener("click", function(){
                                    location.reload();
                                });
                                //plate button on click
                                document.getElementById('platebtn').addEventListener("click", function(){
                                    //thank you header
                                    header.innerHTML = '<h1>THANK YOU FOR PLAYING</h1>'
                                    //thank you game content
                                    game.innerHTML = '';
                                    //thank you game control
                                    gamecontrol.innerHTML = '<div id="thankyou"> <img src="images/finpancake.png" alt="finpancake" id="tyimg"> <h2>SUSPICIOUS PANCAKE</h2> <p>You give the pancakes a taste. Hmm… not bad. The pancakes are a bit bland but the maple syrup and berries save it. The bite leaves an unusual bitter aftertaste...</p> <button id="nextbtn">NEXT</button> </div>';
                                    document.querySelector("#tyimg").style.padding = "0";
                                    document.getElementById('nextbtn').addEventListener("click", function(){
                                        gamecontrol.innerHTML = '<div id="thankyou"> <img src="images/finpancake.png" alt="finpancake" id="tyimg"> <h2>SUSPICIOUS PANCAKE</h2> <p>As the climate crisis persist, there may be a future when our favorite foods are a luxury or completely gone. Making an effort towards sustainability is important to protect the foods you enjoy in your daily life.</p> <p>For more information, check out <a href="https://slowfoodusa.org">Slow Food USA</a></p><button id="playbtn">PLAY AGAIN</button> </div>';
                                        document.getElementById('playbtn').addEventListener("click", function(){
                                            location.reload();
                                        });
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