// Mobile menu

{

let navMobile = document.querySelector('.mobile__list.closed'),
    btn = document.querySelector('.mobile__button');

btn.addEventListener('click', function() {
    if ( navMobile.classList.contains('closed') ) {  
    navMobile.classList.remove('closed');
    }
    else {
        navMobile.classList.add('closed');   
    }
});

}

// // Overlay div
// {

//     let overlay = document.querySelector('.overlay__page.closed'),
//     menuBtn = document.querySelector('.over');
    
//     menuBtn.addEventListener('click', function() {
//             overlay.classList.remove('closed');
//     });
    
// }

// // Close button 

// {
//     function close() {
//         let closeBtn = document.querySelector('.close'),
//             overlay = document.querySelector('.popup');
            
//             closeBtn.addEventListener('click', function() {
//                 overlay.classList.add('closed');
//             });
//     };
//     close();
// }

// function modalOpener({ modal, btn, closeBtn, time = 300}) {

//     const buttonElem = document.querySelectorAll(btn);
//     const modalElem = document.querySelector(modal);

//     modalElem.style.cssText = `
//     display: flex;
//     visibility: hidden;
//     opacity: 0;
//     transistion: opacity ${time}ms ease-in-out;
// `;

//     const closeModal = event => {
//         const target = event.target;
//         if (target === modalElem || 
//             (closeBtn && target.closest(closeBtn))||
//             event.code === 'Escape'
//             ) {
//             modalElem.style.opacity = 0;

//             setTimeout(() => {
//                 modalElem.style.visibility = 'hidden';
//             }, time);
//             window,removeEventListener('keydown', closeModal);
//         }
//     };

//     const openModal = () => {
//         modalElem.style.visibility = 'visible';
//         modalElem.style.opacity = 1;
//         window.addEventListener('keydown', closeModal)
//     };

//     buttonElem.forEach(btn => {
//         btn.addEventListener('click', openModal);

//     });

//     modalElem.addEventListener('click', closeModal);

// }
// modalOpener({
//     modal: '.modal1',
//     btn: '.openBtn1',
//     closeBtn: '.modal__close',
//     time: 1000
// });

// modalOpener({
//     modal: '.modal2',
//     btn: '.openBtn2',
//     closeBtn: '.modal__close'
// });

// modalOpener({
//     modal: '.modal3',
//     btn: '.openBtn3',
//     closeBtn: '.modal__close'
// });