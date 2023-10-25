// IIFE
(function () {

    'use strict';

    const myForm = document.querySelector('#myform');


    document.querySelector('.open').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });


    document.addEventListener('keydown', function(event){
        if(event.key === 'Escape') {
            document.querySelector('#overlay').className = 'hidden';
        }
    });


    myForm.addEventListener('submit', function(event){

        event.preventDefault();

        const nameInput = document.querySelector('#name').value;
        const cafeName = document.querySelector('#cafeName').value;
        const pluralN = document.querySelector('#pluralN').value;
        const adj1 = document.querySelector('#adj1').value;
        const animal = document.querySelector('#animal').value;

        const greeting = document.querySelector('#greeting').value;
        const adj2 = document.querySelector('#adj2').value;
        const studySubject = document.querySelector('#studySubject').value;
        const color = document.querySelector('#color').value;
        const music = document.querySelector('#music').value;


        


        // if(nameInput) {
        //     nameInput.innerHTML = myText;
        // } else {
        //     madlib.innerHTML = "FILL FIELD";
        // }


/*      let myText = '';

        if(name == ''){
            myText = "Please provide a name";
            document.querySelector('#name').focus();
        } else if(cafeName == '') {
            myText = "Please provide another noun";
            document.querySelector('#cafeName').focus();
        } else if(pluralN == '') {
            myText = "Please provide a adjective";
            document.querySelector('#pluralN').focus();
        } else if(adj1 == '') {
            myText = "Please provide a adjective";
            document.querySelector('#adj1').focus();
        } else if(animal == '') {
            myText = "Please provide a verb";
            document.querySelector('#animal').focus();
        } else if(greeting == '') {
            myText = "Please provide a verb";
            document.querySelector('#greeting').focus();
        } else if(adj2 == '') {
            myText = "Please provide a verb";
            document.querySelector('#adj2').focus();
        } else if(studySubject == '') {
            myText = "Please provide a verb";
            document.querySelector('#studySubject').focus();
        } else if(color == '') {
            myText = "Please provide a verb";
            document.querySelector('#color').focus();
        } else if(music == '') {
            myText = "Please provide a verb";
            document.querySelector('#music').focus();
        } else {
            myText = `<p>You typed the words ${noun1}, ${noun2}, ${adj}, ${verb}</p>`;
            document.querySelector('#noun1').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#adj').value = '';
            document.querySelector('#verb').value = '';
        }

        madlib.innerHTML = myText;
        console.log(myText); */

    });

})();