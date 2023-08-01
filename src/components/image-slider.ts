const imageSlider = () => {
    const imageSliderContainer =
        document.querySelector<HTMLDivElement>(".slider");
    const imageSlides = document.querySelectorAll<HTMLDivElement>(".slide");

    const nextImageSlide =
        document.querySelector<HTMLButtonElement>(".btn-next");
    const prevImageSlide =
        document.querySelector<HTMLButtonElement>(".btn-prev");

    const totalSlides = imageSlides.length;
    let currentImageSlide = 0;

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("bottom-nav-dots-container");

    const createDot = (): HTMLDivElement => {
        const newDot = document.createElement("div");
        const newDotButton = document.createElement("button");

        newDot.classList.add("bottom-nav-dots");
        newDotButton.classList.add("btn-nav-dots");
        newDotButton.setAttribute("aria-label", "nav-dot-button");

        newDotButton.type = "button";

        newDot.appendChild(newDotButton);
        dotsContainer.appendChild(newDot);

        return newDot;
    };

    const dots: HTMLDivElement[] = [];
    for (let i = 0; i < Math.min(totalSlides, 5); i += 1) {
        dots.push(createDot());
    }

    imageSliderContainer.appendChild(dotsContainer);

    const updateDotPosition = (position: number): void => {
        dots.forEach((dot, index) => {
            dot.classList.toggle("btn-selected-dot", index === position);
        });
    };

    const updateSlidePosition = (): void => {
        if (totalSlides <= 5) updateDotPosition(currentImageSlide);
        else if (currentImageSlide <= 2) updateDotPosition(currentImageSlide);
        else if (currentImageSlide >= totalSlides - 3)
            updateDotPosition(5 - (totalSlides - currentImageSlide));
        else updateDotPosition(2);

        imageSlides.forEach((slide, index) => {
            slide.style.transform = `translateX(${
                (index - currentImageSlide) * 100
            }%)`;
        });
    };

    const changeSlide = (): void => {
        currentImageSlide = (currentImageSlide + 1) % totalSlides;
        updateSlidePosition();
    };

    const slideShowTimeInterval = 5000;
    let timer = setInterval(changeSlide, slideShowTimeInterval);

    const resetTime = (timer: NodeJS.Timeout): NodeJS.Timeout => {
        clearInterval(timer);
        return setInterval(changeSlide, slideShowTimeInterval);
    };

    if (totalSlides <= 5) {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentImageSlide = index;
                updateSlidePosition();
                timer = resetTime(timer);
            });
        });
    } else {
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                if (
                    currentImageSlide >= 2 &&
                    currentImageSlide <= totalSlides - 3
                )
                    currentImageSlide = index - 2 + currentImageSlide;
                else if (currentImageSlide <= 2) currentImageSlide = index;
                else if (currentImageSlide >= totalSlides - 3)
                    currentImageSlide = totalSlides - 5 + index;

                updateSlidePosition();
                timer = resetTime(timer);
            });
        });
    }

    updateSlidePosition();

    nextImageSlide.addEventListener("click", () => {
        currentImageSlide = (currentImageSlide + 1) % totalSlides;
        updateSlidePosition();
        timer = resetTime(timer);
    });

    prevImageSlide.addEventListener("click", () => {
        currentImageSlide = (currentImageSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
        timer = resetTime(timer);
    });
};

export default imageSlider;
