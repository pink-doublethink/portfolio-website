import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./imageSlider.module.scss";



// const ImageSlider = ({ slides, parentWidth }) => {
//   const timerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = useCallback(() => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }, [currentIndex, slides]);

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   const getSlideStylesWithBackground = (slideIndex) => ({
//     backgroundImage: `url(${slides[slideIndex].url})`,
//     width: `${parentWidth}px`,
//   });

//   const getSlidesContainerStylesWithWidth = () => ({
//     width: `${parentWidth * slides.length}px`,
//     transform: `translateX(-${currentIndex * parentWidth}px)`,
//   });

//   useEffect(() => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//     }
//     timerRef.current = setTimeout(() => {
//       goToNext();
//     }, 2000);

//     return () => clearTimeout(timerRef.current);
//   }, [goToNext]);

//   return (
//     <div className={styles.imgSlider}>
//       <div>
//         <div onClick={goToPrevious} className={styles.leftArrow}>
//           ❰
//         </div>
//         <div onClick={goToNext} className={styles.rightArrow}>
//           ❱
//         </div>
//       </div>
//       <div className={styles.slidesContainer}>
//         <div style={getSlidesContainerStylesWithWidth()}>
//           {slides.map((_, slideIndex) => (
//             <div
//               key={slideIndex}
//               className={styles.slide}
//               style={getSlideStylesWithBackground(slideIndex)}
//             ></div>
//           ))}
//         </div>
//       </div>
//       <div className={styles.dotsContainer}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             className={`${styles.dot} ${slideIndex === currentIndex ? 'active' : ''}`}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const getSlideStylesWithBackground = (slideIndex) => ({
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    display: "flex",
    height: "100%",
    width: parentWidth * slides.length,
    transition: "transform ease-out 0.3s",
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div className={styles.imgSlider}>
      <div>
        <div
          onClick={goToPrevious}
          className={styles.leftArrow}
        >
          ❰
        </div>
        <div
          onClick={goToNext}
          className={styles.rightArrow}
        >
          ❱
        </div>
      </div>
      <div className={styles.slidesContainer}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              className={styles.slide}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((_, slideIndex) => (
          <div
          className={`${styles.dot}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};
  
export default ImageSlider;