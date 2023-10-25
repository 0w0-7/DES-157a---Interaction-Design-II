// IIFE
(function () {

    'use strict';
    console.log("reading js");

    const myForm = document.querySelector('#myform');
    const madlibCreate = document.querySelector('#madlib p');

    myForm.addEventListener('submit', function(event){

        event.preventDefault();

        const name = document.querySelector('#name').value;
        const cafeName = document.querySelector('#cafeName').value;
        const pluralN = document.querySelector('#pluralN').value;
        const adj1 = document.querySelector('#adj1').value;
        const animal = document.querySelector('#animal').value;
        const greeting = document.querySelector('#greeting').value;
        const adj2 = document.querySelector('#adj2').value;
        const studySubject = document.querySelector('#studySubject').value;
        const historicalFigure = document.querySelector('#historicalFigure').value;
        const color = document.querySelector('#color').value;
        const music = document.querySelector('#music').value;


        let myText = '';

        if(name == ''){
            myText = "Please provide a name";
            document.querySelector('#name').focus();

        } else if(cafeName == '') {
            myText = "Please provide a name for a cafe";
            document.querySelector('#cafeName').focus();

        } else if(pluralN == '') {
            myText = "Please provide a plural noun";
            document.querySelector('#pluralN').focus();
            
        } else if(adj1 == '') {
            myText = "Please provide an adjective";
            document.querySelector('#adj1').focus();

        } else if(animal == '') {
            myText = "Please provide an animal";
            document.querySelector('#animal').focus();

        } else if(greeting == '') {
            myText = "Please provide a greeting";
            document.querySelector('#greeting').focus();

        } else if(adj2 == '') {
            myText = "Please provide another adjective";
            document.querySelector('#adj2').focus();

        } else if(studySubject == '') {
            myText = "Please provide a subject of study";
            document.querySelector('#studySubject').focus();
            
        } else if(historicalFigure == '') {
            myText = "Please provide a Historical Figure";
            document.querySelector('#historicalFigure').focus();
            
        }else if(color == '') {
            myText = "Please provide a color";
            document.querySelector('#color').focus();

        } else if(music == '') {
            myText = "Please provide a genre of music";
            document.querySelector('#music').focus();
        } else {
            myText = `    One day, ${name} decided to study at the local cafe, ${cafeName}, and chaos was bound to ensue. As ${name} entered the cafe, the aroma of roasted coffee beans hit them like a ton of ${pluralN}. He chose a table by the window, overlooking the busy street outside.
            <br>
            <br>
            With a stack of textbooks in front of them and a laptop ready to go, ${name} was determined to get some serious studying done. But, being the goofball they were, they couldn't resist a bit of mischief.
            <br>
            <br>
            ${name} looked around and noticed ${adj1} ${animal} statues decorating the cafe. They decided to take a study break and whisper to one of the statues, "${greeting}, ${animal}, do you have any tips for acing my ${studySubject} exam?"
            <br>
            <br>
            To everyone's shock and amusement, the statue seemed to come to life (or so it seemed), and in a funny ${adj2} accent, it replied, "Of course, my dear friend! To master ${studySubject}, you must channel the spirit of a ${historicalFigure} and recite your notes in interpretive dance!"
            <br>
            <br>
            The whole cafe joined in, creating a study session turned impromptu dance party. Even the barista, with a ${color} cap, joined in, grooving to the rhythm of ${music} playing on the cafe's stereo.
            <br>
            <br>
            After the dance party, ${name} returned to their books, now more energized than ever. And even though they didn't quite master the art of interpretive dance studying, they left the cafe that day with a smile, having turned their study session into a memorable, laughter-filled adventure.`;
        }

        madlibCreate.innerHTML = myText;
        document.querySelector('#overlay').className = 'showing';
        console.log(myText);

        document.querySelector('#name').value = '';
        document.querySelector('#cafeName').value = '';
        document.querySelector('#pluralN').value = '';
        document.querySelector('#adj1').value = '';
        document.querySelector('#animal').value = '';
        document.querySelector('#greeting').value = '';
        document.querySelector('#adj2').value = '';
        document.querySelector('#studySubject').value = '';
        document.querySelector('#historicalFigure').value = '';
        document.querySelector('#color').value = '';
        document.querySelector('#music').value = '';

    });

    /* document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    }); */

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });


    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.querySelector('#overlay').className = 'hidden';
        }
    });

})();