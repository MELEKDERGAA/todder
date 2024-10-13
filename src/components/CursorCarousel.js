import React, { useState, useRef, useEffect } from 'react';
import firstCarousel from "../image/firstSlide.png";
import secondCarousel from "../image/SecondSlide.png";
import thirdCarousel from "../image/ThirdSlide.png";
const Carousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Center the first item initially
    const carousel = carouselRef.current;
    const firstItemWidth = carousel.children[0].offsetWidth;
    const centerPosition = firstItemWidth / 2;
    carousel.scrollLeft = centerPosition;
  }, []);

  const startDrag = (e) => {
    setIsDragging(true);
    e.preventDefault();
    setStartPos(e.clientX);
    // Remove transition for smooth dragging
    carouselRef.current.style.transition = 'none';
  };

  const endDrag = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
    // Add back the transition
    carouselRef.current.style.transition = 'transform 0.3s ease-out';
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentPos = e.clientX;
    const movement = currentPos - startPos;
    setCurrentTranslate(prevTranslate + movement);
    carouselRef.current.style.transform = `translateX(${currentTranslate}px)`;
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const delta = e.deltaY; // Get the vertical scroll amount
    carouselRef.current.scrollLeft += delta; // Scroll horizontally
  };

  return (
    <div className="relative w-auto mx-9 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate to-transparent z-10 pointer-events-none"></div>
        {/* Carousel Wrapper */}
            <div
                ref={carouselRef}
                className="flex z-0 justify-center gap-4 overflow-x-hidden overscroll-none"
                onMouseDown={startDrag}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                onMouseMove={onDrag}
                onWheel={handleScroll} // Optional: Enable scrolling with the mouse wheel
                style={{ scrollBehavior: 'smooth' }} // Smooth scrolling
            >
        {/* Carousel Items */}
                <div className="container h-auto min-w-[300px] flex items-center justify-center rounded-lg">
                    <img src={firstCarousel} alt="First Slide" />
                </div>
                <div className="container h-auto min-w-[300px] flex items-center justify-center rounded-lg">
                    <img src={secondCarousel} alt="Second Slide" />
                </div>
                <div className="container h-auto min-w-[300px] flex items-center justify-center rounded-lg">
                    <img src={thirdCarousel} alt="Third Slide" />
                </div>
            </div>
    </div>
  );
};

export default Carousel;
