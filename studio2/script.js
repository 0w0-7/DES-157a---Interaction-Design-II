// loading script
// lazy script

(function () {
    'use strict';

    // const container = document.querySelector('.imgContainerLeft');
    // const hotSpots = document.querySelectorAll('.imgContainerLeft div');
    // const theImg = document.querySelector('.imgContainerLeft img');

    // hotSpots.forEach(function (eachSpot){
    //     eachSpot.addEventListener('mouseover', zoomPhoto);
    //     eachSpot.addEventListener('mouseout', function(){
    //         theImg.className = 'start';
    //     });
    // });

    // function zoomPhoto(event) {
    //     const thisCorner = event.target.id;
    //     console.log(thisCorner);
    //     switch(thisCorner) {
    //         case 'topleft': theImg.className = 'topleft'; break;
    //         case 'topright': theImg.className = 'topright'; break;
    //         case 'bottomleft': theImg.className = 'bottomleft'; break;
    //         case 'bottomright': theImg.className = 'bottomright'; break;
    //         case 'center': theImg.className = 'center'; break;
    //     }
    // }

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
    
        // Scroll Event Listener
        window.addEventListener('scroll', function(){
            pagetop = window.pageYOffset + 250;
            // console.log(pagetop);

            if(pagetop > postTops[counter]){
                counter++;
                // console.log(`scrolling down ${counter}`);

            } else if (counter > 1 && pagetop <postTops[counter-1]) {
                counter--;
                // console.log(`scrolling up ${counter}`);
            }

            if(counter != prevCounter){
                navLinks.forEach(function(eachLink){
                    eachLink.removeAttribute('class');
                });
                const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);

                thisLink.className = 'selected';
                prevCounter = counter;
            }
        }); // end window scroll function

        // Canvas :: Need to uncomment var done resizing up top
        window.addEventListener('resize', function () {

            // clear the timer
            clearTimeout(doneResizing);
        
            // start a timer that calls the resetPagePosition function in 500ms
            doneResizing = setTimeout(function () {
        
                resetPagePosition();
        
            }, 500);
        });

        function resetPagePosition() {
            // clear out the postTop values
            postTops = [];
        
            // push the new top values for each post in the posts array
            posts.forEach(function (post) {
                postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
            });
        
            // create a new variable to hold the position of the document
            const pagePosition = window.pageYOffset + 250;
        
            // set the counter to 0
            counter = 0;
        
            // increment the counter based on the pagePosition 
            postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });
        
            // remove all classes from the navLinks
            navLinks.forEach(function (eachLink) { eachLink.removeAttribute('class'); });
        
            // set the class on the correct link
            const thisLink = document.querySelector(`nav ul li:nth-child(${counter}) a`);
            thisLink.className = 'selected';
        }

    });

})();