(function(){
    const HIDDEN_CLASS = "hidden";
    const BALL_ROLLING_CLASS = "ball-rolling";
    const UNSELECTED_DOT = "&#9899";
    const SELECTED_DOT = "&#9898";
    const SLIDESHOW_CHANGE_PERIOD =  7000;

    // Slideshow
    const leftSlideshowArrow = document.getElementById("left-slideshow-arrow");
    const rightSlideshowArrow = document.getElementById("right-slideshow-arrow");
    const dots = document.getElementsByClassName("slideshow-dot");
    const slideshowImages = document.getElementsByClassName("slideshow-photo");

    // Ball interaction
    const cssRoot = document.querySelector(":root");
    const ball = document.getElementById("ball");
    const grassLeftOfHole = document.getElementById("grass-left-of-hole");

    /** Changes the current image on the slideshow to the 
     * image corresponding to imageNum.
     * 
     * @param {number} imageNum - Number to change image to.
     */
    function changeSlideShowImage (imageNum) {
        // Make the last slideshow image connect back to first.
        slideshowImagesEndIndex = slideshowImages.length - 1;
        if (imageNum > slideshowImagesEndIndex) {
            imageNum = 0;
        } else if (imageNum < 0) {
            imageNum = slideshowImagesEndIndex;
        }

        let currentDot = dots[imageNum]
        let currentImage = slideshowImages[imageNum]
        currentImageNum = imageNum;

        // Hide all images.
        for (const image of slideshowImages) {
            image.classList.add(HIDDEN_CLASS);
        }
        // Convert all dots to unselected dot.
        for (const dot of dots) {
            dot.innerHTML= UNSELECTED_DOT;
        }
        currentDot.innerHTML = SELECTED_DOT;
        currentImage.classList.remove(HIDDEN_CLASS); 
    }

    /**
     * Resets the time of the auto slideshow event corresponding to
     * the given id. Returns the id of the reset auto slideshow event.
     * 
     * @param {number} autoSlideShowEvent - Auto slide show event id to reset.
     * @returns {number} New auto slide show event id.
     */
    function resetSlideShowTime(autoSlideShowEvent) {
        clearInterval(autoSlideShowEvent);
        newAutoSlideShowEvent = setInterval(() => {changeSlideShowImage(currentImageNum + 1)}, 
            SLIDESHOW_CHANGE_PERIOD);
        return newAutoSlideShowEvent;
    }

    // || Slide Show Logic
    let currentImageNum = 0;
    let autoSlideShowEvent = setInterval(() => {changeSlideShowImage(currentImageNum + 1)}, 
        SLIDESHOW_CHANGE_PERIOD);

    let ball_in_hole = false;

    // Make clicking dots change slideshow image.
    for (let index = 0; index < dots.length; index++) {
        let dot = dots[index];

        dot.addEventListener("click", () => {
            autoSlideShowEvent = resetSlideShowTime(autoSlideShowEvent);
            changeSlideShowImage(index, autoSlideShowEvent);
        });
    }

    leftSlideshowArrow.addEventListener("click", () => {
        autoSlideShowEvent = resetSlideShowTime(autoSlideShowEvent);
        changeSlideShowImage(currentImageNum - 1, autoSlideShowEvent);
    });
    rightSlideshowArrow.addEventListener("click", () => {
        autoSlideShowEvent = resetSlideShowTime(autoSlideShowEvent);
        changeSlideShowImage(currentImageNum + 1, autoSlideShowEvent);
    });

    // || Ball interaction logic
    ball.addEventListener("click", () => {
        if (!ball_in_hole) {
            let ballTravelDistance = grassLeftOfHole.offsetWidth;

            // setProperty to ensure that ball travels correct distance for screenwidth.
            cssRoot.style.setProperty("--ball-distance-to-move", ballTravelDistance + "px");
            ball.classList.add(BALL_ROLLING_CLASS);

            ball_in_hole = true;
        } else {
            ball.classList.remove(BALL_ROLLING_CLASS);
            ball_in_hole = false;
        }
        
    });

    window.addEventListener("resize", () => {
        ball.classList.remove(BALL_ROLLING_CLASS);
        ball_in_hole = false;
    });
})();