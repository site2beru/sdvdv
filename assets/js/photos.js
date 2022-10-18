{
    imgClick = () => {
        let galImg = document.querySelectorAll('.media__img');

        for (let i = 0; i < galImg.length; i++) {
            galImg[i].addEventListener('click', function() {
                galImg[i].classList.toggle('clicked');
            });
        }
    }
    imgClick();
}