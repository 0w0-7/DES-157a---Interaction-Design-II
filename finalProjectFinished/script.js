// loading script
// lazy script

(function () {
    'use strict';

    const article1Images = ['g1.JPG', 'g2.JPG'];
    const article1Div = document.querySelector('#a1Info');

    const article2Images = ['ms1.JPG', 'ms2.JPG'];
    const article2Div = document.querySelector('#a2Info');

    const article3Images = ['m1.JPG', 'm2.JPG'];
    const article3Div = document.querySelector('#a3Info');

    let currentA1Img = 0;
    let currentA2Img = 0;
    let currentA3Img = 0;

    const slide1 = document.querySelector('#a1Image');
    const slide2 = document.querySelector('#a2Image');
    const slide3 = document.querySelector('#a3Image');

    document.querySelector('#nextA1').addEventListener('click', nextPhoto1);
    document.querySelector('#previousA1').addEventListener('click', previousPhoto1);

    document.querySelector('#nextA2').addEventListener('click', nextPhoto2);
    document.querySelector('#previousA2').addEventListener('click', previousPhoto2);

    document.querySelector('#nextA3').addEventListener('click', nextPhoto3);
    document.querySelector('#previousA3').addEventListener('click', previousPhoto3);


    function nextPhoto1(){
        currentA1Img++;

        if(currentA1Img > article1Images.length-1){
            currentA1Img=0;
        }

        slide1.src = `images/${article1Images[currentA1Img]}`;

        if (currentA1Img == 0) {
            article1Div.innerHTML = '';
            article1Div.innerHTML = `
                <h3>Genoa's famous elevated road "sopraelevata Aldo Moro"</h3>
                <div class="subInfo">
                    <p>July 9, 2023</p>
                </div>
                
                <p class="description">
                    The Sopraelevata Aldo Moro is a five-kilometer long elevated highway in Genoa, Italy that runs along the port. It's also known as the strada sopraelevata di Genova, which translates to "elevated highway of Genoa". This elevated urban highway separates the Genoese old town from the historic harbor. This 16-meter-wide elevated road was built in just one and a half years, opening on August 25, 1965. Supported by 210 pillars, it connects the districts of Foce and Sampierdarena, offering a solution to the challenge of private transport navigating the old town. While it reflected the spirit of the 1960s, the project faced significant opposition from those concerned about preserving the cityscape.
                    <br>
                    Within this image holds a lot of history and consideration that went into its construction. Not able to be seen as the image was taken in the direction of the city, however, behind the image was the port of Genoa. And with a closer inspection, graffiti could be seen covering the beams supporting the highway.
                </p>
            `;
        } else {
            article1Div.innerHTML = '';
            article1Div.innerHTML = `
                <h3>Astronomical Clock of the Cathedral of Messina</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    The Astronomical Clock of the Cathedral of Messina, located in the Cathedral's bell tower in Messina, Sicily, is an intricate timepiece created between 1755 and 1933 by the Sicilian monk and mathematician Giovanni Maria Catalano. This historical clock boasts multiple dials and moving parts, displaying not only the time but also astronomical and astrological information, including celestial positions, moon phases, and a zodiac dial. It has undergone several restorations and remains a popular tourist attraction, captivating visitors with its remarkable complexity and daily "Show of the Apostles." About a mile out from this clock, a classical tune could be heard as I was walking towards it.
                </p>
            `;
        }

    }

    function previousPhoto1(){
        currentA1Img--;

        if(currentA1Img < 0){
            currentA1Img = article1Images.length-1;
        }

        slide1.src = `images/${article1Images[currentA1Img]}`;


        if (currentA1Img == 0) {
            article1Div.innerHTML = '';
            article1Div.innerHTML = `
                <h3>Genoa's famous elevated road "sopraelevata Aldo Moro"</h3>
                <div class="subInfo">
                    <p>July 9, 2023</p>
                </div>
                
                <p class="description">
                    The Sopraelevata Aldo Moro is a five-kilometer long elevated highway in Genoa, Italy that runs along the port. It's also known as the strada sopraelevata di Genova, which translates to "elevated highway of Genoa". This elevated urban highway separates the Genoese old town from the historic harbor. This 16-meter-wide elevated road was built in just one and a half years, opening on August 25, 1965. Supported by 210 pillars, it connects the districts of Foce and Sampierdarena, offering a solution to the challenge of private transport navigating the old town. While it reflected the spirit of the 1960s, the project faced significant opposition from those concerned about preserving the cityscape.
                    <br>
                    Within this image holds a lot of history and consideration that went into its construction. Not able to be seen as the image was taken in the direction of the city, however, behind the image was the port of Genoa. And with a closer inspection, graffiti could be seen covering the beams supporting the highway.
                </p>
            `;
        } else {
            article1Div.innerHTML = '';
            article1Div.innerHTML = `
                <h3>Astronomical Clock of the Cathedral of Messina</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    The Astronomical Clock of the Cathedral of Messina, located in the Cathedral's bell tower in Messina, Sicily, is an intricate timepiece created between 1755 and 1933 by the Sicilian monk and mathematician Giovanni Maria Catalano. This historical clock boasts multiple dials and moving parts, displaying not only the time but also astronomical and astrological information, including celestial positions, moon phases, and a zodiac dial. It has undergone several restorations and remains a popular tourist attraction, captivating visitors with its remarkable complexity and daily "Show of the Apostles." About a mile out from this clock, a classical tune could be heard as I was walking towards it.
                </p>
            `;
        }

        
    }


    function nextPhoto2(){
        currentA2Img++;

        if(currentA2Img > article2Images.length-1){
            currentA2Img=0;
        }

        slide2.src = `images/${article2Images[currentA2Img]}`;

        if (currentA2Img == 0) {
            article2Div.innerHTML = '';
            article2Div.innerHTML += `
                <h3>Gelato Shop"</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    What may seem like a front view of a building or shop is actually exactly what it seems like. This is an image of a street of shops selling things from clothes, coffee, gelato, and local bakeries. What can be noticed are people sitting down at a table in front of these shops. However, it’s very hard to tell how wide the sidewalk is for people to walk through. In fact, it was very narrow and the whole side of that street was compact. Issuing a very claustrophobic feeling. The shop that I had visited was a small gelato shop barely capable of fitting a group of ten. The gelato was very smooth and flavorful. In direct translation, gelato means ice cream in Italian. However, the texture of Italian gelato is denser, smoother, and richer than American ice cream.
                </p>
            `;
        } else {
            article2Div.innerHTML = '';
            article2Div.innerHTML += `
                <h3>Astronomical Clock of the Cathedral of Messina</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    The Astronomical Clock of the Cathedral of Messina, located in the Cathedral's bell tower in Messina, Sicily, is an intricate timepiece created between 1755 and 1933 by the Sicilian monk and mathematician Giovanni Maria Catalano. This historical clock boasts multiple dials and moving parts, displaying not only the time but also astronomical and astrological information, including celestial positions, moon phases, and a zodiac dial. It has undergone several restorations and remains a popular tourist attraction, captivating visitors with its remarkable complexity and daily "Show of the Apostles." About a mile out from this clock, a classical tune could be heard as I was walking towards it.
                </p>
            `;
        }

        
    }

    function previousPhoto2(){
        currentA2Img--;

        if(currentA2Img < 0){
            currentA2Img = article2Images.length-1;
        }

        slide2.src = `images/${article2Images[currentA2Img]}`;

        if (currentA2Img == 0) {
            article2Div.innerHTML = '';
            article2Div.innerHTML += `
                <h3>Gelato Shop"</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    What may seem like a front view of a building or shop is actually exactly what it seems like. This is an image of a street of shops selling things from clothes, coffee, gelato, and local bakeries. What can be noticed are people sitting down at a table in front of these shops. However, it’s very hard to tell how wide the sidewalk is for people to walk through. In fact, it was very narrow and the whole side of that street was compact. Issuing a very claustrophobic feeling. The shop that I had visited was a small gelato shop barely capable of fitting a group of ten. The gelato was very smooth and flavorful. In direct translation, gelato means ice cream in Italian. However, the texture of Italian gelato is denser, smoother, and richer than American ice cream.
                </p>
            `;
        } else {
            article2Div.innerHTML = '';
            article2Div.innerHTML += `
                <h3>Astronomical Clock of the Cathedral of Messina</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    The Astronomical Clock of the Cathedral of Messina, located in the Cathedral's bell tower in Messina, Sicily, is an intricate timepiece created between 1755 and 1933 by the Sicilian monk and mathematician Giovanni Maria Catalano. This historical clock boasts multiple dials and moving parts, displaying not only the time but also astronomical and astrological information, including celestial positions, moon phases, and a zodiac dial. It has undergone several restorations and remains a popular tourist attraction, captivating visitors with its remarkable complexity and daily "Show of the Apostles." About a mile out from this clock, a classical tune could be heard as I was walking towards it.
                </p>
            `;
        }
    }


    function nextPhoto3(){
        currentA3Img++;

        if(currentA3Img > article3Images.length-1){
            currentA3Img=0;
        }

        slide3.src = `images/${article3Images[currentA3Img]}`;

        if (currentA3Img == 0) {
            article3Div.innerHTML = '';
            article3Div.innerHTML += `
                <h3>Gelato Shop"</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    What may seem like a front view of a building or shop is actually exactly what it seems like. This is an image of a street of shops selling things from clothes, coffee, gelato, and local bakeries. What can be noticed are people sitting down at a table in front of these shops. However, it’s very hard to tell how wide the sidewalk is for people to walk through. In fact, it was very narrow and the whole side of that street was compact. Issuing a very claustrophobic feeling. The shop that I had visited was a small gelato shop barely capable of fitting a group of ten. The gelato was very smooth and flavorful. In direct translation, gelato means ice cream in Italian. However, the texture of Italian gelato is denser, smoother, and richer than American ice cream.
                </p>
            `;
        } else {
            article3Div.innerHTML = '';
            article3Div.innerHTML += `
                <h3>Astronomical Clock of the Cathedral of Messina</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    The Astronomical Clock of the Cathedral of Messina, located in the Cathedral's bell tower in Messina, Sicily, is an intricate timepiece created between 1755 and 1933 by the Sicilian monk and mathematician Giovanni Maria Catalano. This historical clock boasts multiple dials and moving parts, displaying not only the time but also astronomical and astrological information, including celestial positions, moon phases, and a zodiac dial. It has undergone several restorations and remains a popular tourist attraction, captivating visitors with its remarkable complexity and daily "Show of the Apostles." About a mile out from this clock, a classical tune could be heard as I was walking towards it.
                </p>
            `;
        }

        
    }

    function previousPhoto3(){
        currentA3Img--;

        if(currentA3Img < 0){
            currentA3Img = article3Images.length-1;
        }

        slide3.src = `images/${article3Images[currentA3Img]}`;

        if (currentA3Img == 0) {
            article3Div.innerHTML = '';
            article3Div.innerHTML += `
                <h3>Gelato Shop"</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    What may seem like a front view of a building or shop is actually exactly what it seems like. This is an image of a street of shops selling things from clothes, coffee, gelato, and local bakeries. What can be noticed are people sitting down at a table in front of these shops. However, it’s very hard to tell how wide the sidewalk is for people to walk through. In fact, it was very narrow and the whole side of that street was compact. Issuing a very claustrophobic feeling. The shop that I had visited was a small gelato shop barely capable of fitting a group of ten. The gelato was very smooth and flavorful. In direct translation, gelato means ice cream in Italian. However, the texture of Italian gelato is denser, smoother, and richer than American ice cream.
                </p>
            `;
        } else {
            article3Div.innerHTML = '';
            article3Div.innerHTML += `
                <h3>Astronomical Clock of the Cathedral of Messina</h3>
                <div class="subInfo">
                    <p>July 11, 2023</p>
                </div>
                
                <p class="description">
                    The Astronomical Clock of the Cathedral of Messina, located in the Cathedral's bell tower in Messina, Sicily, is an intricate timepiece created between 1755 and 1933 by the Sicilian monk and mathematician Giovanni Maria Catalano. This historical clock boasts multiple dials and moving parts, displaying not only the time but also astronomical and astrological information, including celestial positions, moon phases, and a zodiac dial. It has undergone several restorations and remains a popular tourist attraction, captivating visitors with its remarkable complexity and daily "Show of the Apostles." About a mile out from this clock, a classical tune could be heard as I was walking towards it.
                </p>
            `;
        }
    }


    // start your script here...
    const navLinks = document.querySelectorAll('main .story .infoL .button, main .story .infoR .button, #header .button, main #closing .button');

    navLinks.forEach(function(eachLink){
        eachLink.addEventListener('click', smoothScroll);

    });

    // SMooth Scroll Function
    function smoothScroll(event){
        event.preventDefault();

        const targetId = event.target.getAttribute('href');
        // console.log(targetId);

        const targetAnchor = document.querySelector(targetId);
        // console.log(targetAnchor.getBoundingClientRect().top);

        // Assigning the Distance
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top);

        // ScrollBy Method
        window.scrollBy({top: originalTop, left: 0, behavior: 'smooth'});
        // console.log(originalTop);
    }

    // Add Scroll Event Listener
    // Checking for Load
    window.addEventListener('load', function(){
        const posts = document.querySelectorAll('section');
        let postTops = [];
        let pagetop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;
        // console.log(posts[0]).getBoundingClientRect().top);
        // console.log(posts[0]).getBoundingClientRect().top + this.window.pageYOffset); ******

        // forEach + push()
        posts.forEach(function(post){
            postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
        });
        // console.log(postTops);

    });

})();