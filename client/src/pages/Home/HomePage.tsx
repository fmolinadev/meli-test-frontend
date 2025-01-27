import { Slider } from "../../presentation";
import styles from "./home.module.scss";

import sliderImage1 from "../../assets/images/slider/slider-0.png";
import sliderImage2 from "../../assets/images/slider/slider-1.png";
import sliderImage3 from "../../assets/images/slider/slider-2.png";
import sliderImage4 from "../../assets/images/slider/slider-3.png";
import sliderImage5 from "../../assets/images/slider/slider-4.png";

export const HomePage = () => {
  const sliderImages = [
    sliderImage1,
    sliderImage2,
    sliderImage3,
    sliderImage4,
    sliderImage5,
  ];

  return (
    <div>
      <Slider auto speed={4000}>
        {sliderImages.map((image, index) => (
          <div key={index} className={styles["slider-container"]}>
            <img src={image} alt={`Slider ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
