import { partners_trio_1, partners_trio_2, partners_single } from '../../static/slider.js';

class Slider {
    constructor() {
        this.partners_trio_1 = partners_trio_1;
        this.partners_trio_2 = partners_trio_2;
        this.partners_single = partners_single;
        this.currentIndex = 0;
        this.intervalId = null;

        this.startX = 0;
        this.currentX = 0;
        this.isTouching = false;
    }

    startSlider() {
        this.intervalId = setInterval(() => {
            this.updateOpacity();
        }, 5000);
    }

    stopSlider() {
        clearInterval(this.intervalId);
    }

    updateOpacity() {
        const containers = document.querySelectorAll('.images-container > div');
        containers.forEach((container, index) => {
            container.classList.remove('middle', 'next', 'prev');
            if (index === this.currentIndex) {
                container.classList.add('middle');
            } else if (index === (this.currentIndex + 1) % containers.length) {
                container.classList.add('next');
            } else if (index === (this.currentIndex - 1 + containers.length) % containers.length) {
                container.classList.add('prev');
            }
        });
        this.currentIndex = (this.currentIndex + 1) % containers.length;
    }
    
    handleArrowClick(direction) {
        const containers = document.querySelectorAll('.images-container > div');
    
        containers.forEach(container => container.classList.remove('opacity1'));
    
        if (direction === 'right') {
            containers[(this.currentIndex === 0) ? 2 : this.currentIndex - 1].classList.add('opacity1');
        }
    
        if (direction === 'left') {
            this.currentIndex = (this.currentIndex === 2) ? 0 : this.currentIndex + 1;
        }
    
        this.updateOpacity();
    }

    handleDotClick(index) {
        this.currentIndex = index;
        this.updateOpacity();
    }

    // Touch Slide

    handleTouchStart(e) {
        if(window.innerWidth < 768) {
            this.isTouching = true;
            this.startX = e.touches[0].pageX;
        }
    }

    handleTouchMove(e) {
        if (!this.isTouching) return;
        this.currentX = e.touches[0].pageX;
    }

    handleTouchEnd() {
        const swipeLength = this.startX - this.currentX;
        if (swipeLength > 50) {
            this.handleArrowClick('left');
        } else if (swipeLength < -50) {
            this.handleArrowClick('right');
        }
        this.isTouching = false;
    }


    render() {
        const sliderElement = document.createElement('section');
        sliderElement.id = "slider-section";
        sliderElement.innerHTML = `
            <link rel="stylesheet" href="components/Slider/slider.css">
            <div class="slider-arrow-container left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41">
                    <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
                </svg>
            </div>
            <div class="slider-section-container">
                <div class="slider-title">
                    <span>პროექტის პარტნიორები</span>
                </div>
                <div class="slider-container">
                    <div class="images-container">
                        <div class="partners-trio1 opacity1">
                            ${this.partners_trio_1.map((partnerImgSrc) => 
                                `<div class="partner-logo-container">
                                    <img src=${partnerImgSrc} alt="partner">
                                </div>`
                            ).join('')}
                        </div>
                        <div class="partners-trio2">
                            ${this.partners_trio_2.map((partnerImgSrc) => 
                                `<div class="partner-logo-container">
                                    <img src=${partnerImgSrc} alt="partner">
                                </div>`
                            ).join('')}
                        </div>
                        <div class="partners-single">
                            <div class="partner-logo-container">
                                <img src=${this.partners_single} alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="slider-arrow-container right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41">
                    <path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
                </svg>
            </div>
        `;

        const dots = sliderElement.querySelectorAll('.slider-dots > div');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.handleDotClick(index));
        });

        sliderElement.addEventListener('mouseenter', () => this.stopSlider()) // ეს ლოგიკა საიტზე შევამჩნიე
        sliderElement.addEventListener('mouseleave', () => this.startSlider())

            sliderElement.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        sliderElement.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        sliderElement.addEventListener('touchend', () => this.handleTouchEnd());

        // Start the slider when the element is added to the DOM
        setTimeout(() => this.startSlider(), 0);

        return sliderElement;
    }
}

export default Slider;
