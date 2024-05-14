(function() {
    'use strict';

    //input values
    const raspberry = document.getElementById('raspberry');
    const elderberry = document.getElementById('elderberry');
    const pear = document.getElementById('pear');
    const cherry = document.getElementById('cherry');

    //leaflet map
    const map = L.map('map').setView([37.090240, -95.712891], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //hawaii
    const markerH = L.marker([19.896767, -155.582779]).addTo(map);
    markerH.bindPopup("Akala (Hawaiian Raspberry)").openPopup();

    const polygonH = L.polygon([
        [18.166730, -155.623844],
        [19.394068, -154.186203],
        [22.309426, -157.748150],
        [29.611670, -178.491658],
        [27.839076, -179.116839],
        [24.686952, -174.272379]
    ]).addTo(map);

    markerH.addEventListener('click', function(){
        raspberry.scrollIntoView({behavior: "smooth"});
    })

    //midwest
    const markerMW = L.marker([42.032974, -93.564500]).addTo(map);
    markerMW.bindPopup("American Black Elderberry").openPopup();

    const polygonMW = L.polygon([
        [49.009051, -104.041373],
        [40.747257, -104.012862],
        [40.680638, -102.165927],
        [36.809285, -102.209901],
        [36.774092, -94.690558],
        [36.438961, -94.630333],
        [36.315125, -90.732223],
        [35.639441, -90.512350],
        [35.639441, -89.544907],
        [38.410558, -84.433842],
        [37.857507, -82.235109],
        [40.446947, -80.184409],
        [41.934977, -80.536206],
        [41.508577, -82.119294],
        [41.640078, -83.130711],
        [43.068888, -82.295192],
        [46.103709, -83.398256],
        [47.931066, -89.598682],
        [49.009051, -95.227438]
    ]).addTo(map);

    markerMW.addEventListener('click', function(){
        elderberry.scrollIntoView({behavior: "smooth"});
    })

    //northeast
    const markerNE = L.marker([42.617791, -75.308240]).addTo(map);
    markerNE.bindPopup("Bar-Seckel Pear").openPopup();

    const polygonNE = L.polygon([
        [42.195969, -80.635951],
        [39.707187, -80.548002],
        [39.470125, -75.974579],
        [38.410558, -75.754735],
        [38.376115, -74.919217],
        [39.571822, -73.907800],
        [40.245992, -73.643952],
        [40.813809, -69.598284],
        [42.098222, -69.774182],
        [42.309815, -70.262716],
        [43.133061, -70.020855],
        [43.691708, -67.800135],
        [44.777936, -66.811923],
        [45.567910, -67.339619],
        [45.675482, -67.691416],
        [47.040182, -67.713403],
        [47.398349, -68.351036],
        [47.487513, -69.230529],
        [46.528635, -70.219959],
        [45.352145, -70.945540],
        [45.305803, -71.451249],
        [45.011419, -71.605160],
        [44.964798, -75.013211],
        [44.071800, -76.486362],
        [43.628123, -76.816172],
        [43.580391, -78.658955],
        [43.341160, -79.186651],
        [42.795401, -78.900816]
    ]).addTo(map);

    markerNE.addEventListener('click', function(){
        pear.scrollIntoView({behavior: "smooth"});
    })

    //pacific, northwest
    const markerNW = L.marker([44.465151, -115.476427]).addTo(map);
    markerNW.bindPopup("Aunt Molly’s Ground Cherry").openPopup();
    const polygonNW = L.polygon([
        [49.037868, -104.043310],
        [48.690960, -123.216260],
        [48.341646, -125.239094],
        [44.964798, -124.359425],
        [42.423457, -125.063019],
        [39.707187, -124.711222],
        [33.504759, -120.840161],
        [32.472695, -117.766982],
        [32.583849, -114.512858],
        [34.234512, -114.205035],
        [34.957995, -114.556832],
        [38.891033, -119.965715],
        [41.771312, -119.922679],
        [41.804078, -111.171723],
        [40.880295, -111.083774],
        [40.847060, -104.003854]
    ]).addTo(map);

    markerNW.addEventListener('click', function(){
        cherry.scrollIntoView({behavior: "smooth"});
    })

    //aos
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });

})()