"use strict";

function classActive(className, classObject, ths) {
    for (const element of classObject) {
        element.classList.remove(className);
    }

    ths.classList.add(className);
}

(function featuresAction() {
    function ImageMap (name, src){
        this.featuresName = name;
        this.featureImg = src
    }


    function featureActive() {
        classActive('feature__active', featuresOptions, this);
        const activeOption = document.querySelector('.feature__active p');
        classActive('activeParagraph', featureParagraphs, activeOption);
        
        featureImage.src = `/styles/images/TaxPal_files/${featuresId[this.id].featureImg}.png`;
    }

   
    let featureImage = document.getElementById('featureImage');
    const featuresOptions = document.getElementsByClassName('features__options');
    const featureParagraphs = document.querySelectorAll('.features__options p');
    const featuresImages = ['payroll', 'expenses', 'vat-returns', 'reporting'];
    const featuresId = {}

    for (let index = 0; index < featuresImages.length; index++) {
        featuresId[featuresOptions.item(index).id] = new ImageMap(featuresOptions.item(index).id, featuresImages[index]);
        featuresOptions[index].addEventListener('click', featureActive);
    } 

}());


(function taskAction() {
    const taskDetails = document.querySelectorAll('.task__detail');
    const imageSlideCOntainer = document.getElementById('taskImageContainer');
    let allTaskImages = document.querySelectorAll('.task__image');
    let imagePosition;
    let counter = 0
    let allTaskImageRight = [];
    for (let pos of allTaskImages) {
        allTaskImageRight[counter] = pos.getBoundingClientRect().left - document.querySelector('.task__images').getBoundingClientRect().left;
        counter++;
    }
    counter = 0;
    

    function taskMediaMd() {
        for (const detail of taskDetails) {
            
            const taskImageContainer = document.getElementsByClassName(detail.id);
            for (const image of taskImageContainer) {
                image.classList.replace('task__image', 'task__img')
                detail.insertAdjacentElement('afterend', image);
                image.classList.add('active')
            }
        }
    }

    function taskMediaLg() {
        const previousImage = document.querySelectorAll('.task__img');
        if (previousImage) {
            const taskImageContainer = document.getElementById('taskImageContainer');
            for (const image of previousImage) { 
                image.classList.replace('task__img', 'task__image');   
                taskImageContainer.insertAdjacentElement('beforeend', image);
            }  

            allTaskImages = document.querySelectorAll('.task__image');
            imagePosition;
            counter = 0
        }

        for (let detail of taskDetails) {
            detail.addEventListener('click', function taskActive() {
            classActive('task__active', taskDetails, this);
            for (let image of allTaskImages) {
                    image.classList.remove('active');
                    if (image.classList.contains(this.id)) {
                        image.classList.add('active');
                        imagePosition = -allTaskImageRight[counter];
                        imageSlideCOntainer.style.left = `${imagePosition}px`;
                        imageSlideCOntainer.style.transition = 'left .8s';
                    }
                    counter++;
            }
            counter = 0;
            });
        }
    }

    function taskMediaEvent(e) {
        if (e.matches) {
            taskMediaLg();     
        }
        else {
            taskMediaMd();
        }
    }

    
    const taskMediaQueryLg = window.matchMedia('(min-width: 1024px)');
    taskMediaQueryLg.addEventListener('change', taskMediaEvent);
    taskMediaEvent(taskMediaQueryLg);
    
}());



(function subscriptionAction() {
    const subscriptionPackages = document.querySelectorAll('.subscription__package');
    for (let currentPackage of subscriptionPackages) {
        currentPackage.addEventListener('click', function subscriptionActive() {
            classActive('active__subscription', subscriptionPackages, this);
        });
    }
}());


(function navActionSm() {
    const navButtonSm = document.querySelector('.sm-menu-icon');
       
    navButtonSm.addEventListener('click', function toggleMenu() {
        const navBarSm = document.querySelector('.sm-menu');
        navBarSm.classList.toggle('active');
        console.log('HYYYY')
    });
}())