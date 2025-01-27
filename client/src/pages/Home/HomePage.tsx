import { Link } from "react-router-dom";
import {
  FavouriteItem,
  MercadoPlay,
  ShippingBox,
  Slider,
} from "../../presentation";
import { useFavouritesContext } from "../../context";
import sliderImage1 from "../../assets/images/slider/slider-0.png";
import sliderImage2 from "../../assets/images/slider/slider-1.png";
import sliderImage3 from "../../assets/images/slider/slider-2.png";
import sliderImage4 from "../../assets/images/slider/slider-3.png";
import sliderImage5 from "../../assets/images/slider/slider-4.png";
import styles from "./home.module.scss";

export const HomePage = () => {
  const { favourites } = useFavouritesContext();

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
      <div className={styles["center-home-placement"]}>
        {favourites.length > 0 ? (
          <div className={styles["favourites-container"]}>
            {favourites.slice(0, 5).map((item) => (
              <Link
                key={item.id}
                className={styles["link-no-style"]}
                to={`/items/${item.id}`}
              >
                <div className={styles["favourite-item"]}>
                  <FavouriteItem item={item} />
                </div>
              </Link>
            ))}
          </div>
        ) : null}

        <h3 className={styles["section-title"]}>¿Qué es Mercado Play?</h3>
        <MercadoPlay />
        <ShippingBox />
      </div>
    </div>
  );
};
