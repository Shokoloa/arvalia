import React, { useState, useEffect } from "react";
import img1 from "../../Assets/images/pics/IMG_0351.jpg";
import img2 from "../../Assets/images/pics/IMG_0350.jpg";
import img3 from "../../Assets/images/pics/IMG_0349.jpg";

const Slideshow = () => {
  const images = [
    img1,
    img2,
    img3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);

    const points = document.querySelectorAll(".point");

    points.forEach((point, index) => {
      if (index === currentIndex) {
        point.classList.add("active");
      } else {
        point.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <img src={images[currentIndex]} draggable={false} alt="" />
  );
};

export default Slideshow;