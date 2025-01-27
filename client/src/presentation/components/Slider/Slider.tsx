import React, { useRef, useState, ReactNode } from "react";

import { useIntervalSlider } from "../../../hooks";
import styles from "./Slider.module.scss";

interface Props {
  children: ReactNode[];
  auto?: boolean;
  speed?: number;
}

export const Slider = ({ children, auto = false, speed = 3000 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(1);
  const length = children.length + 1;
  const percent = 100 / length;
  const [isMouseOver, setIsMouseOver] = useState(false);

  const moveToRight = () => {
    const currentPer = -position * percent;
    const movePer = position < length - 1 ? currentPer - percent : currentPer;

    if (position === length - 1 && ref.current) {
      ref.current.style.transition = "none";
      ref.current.style.transform = `translateX(0%)`;
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = "all 0.3s ease-in";
          ref.current.style.transform = `translateX(-${percent}%)`;
        }
      }, 50);
    } else if (ref.current) {
      ref.current.style.transition = "all 0.3s ease-in";
      ref.current.style.transform = `translateX(${movePer}%)`;
    }

    setPosition(position < length - 1 ? position + 1 : 1);
  };

  const moveToLeft = () => {
    const currentPer = -position * percent;
    const movePer = position !== 0 ? currentPer + percent : currentPer;

    if (position === 1 && ref.current) {
      ref.current.style.transition = "all 0.3s ease-in";
      ref.current.style.transform = `translateX(${movePer}%)`;
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = "none";
          ref.current.style.transform = `translateX(-${
            percent * (length - 1)
          }%)`;
        }
      }, 300);
    } else if (ref.current) {
      ref.current.style.transition = "all 0.3s ease-in";
      ref.current.style.transform = `translateX(${movePer}%)`;
    }

    setPosition(position !== 1 ? position - 1 : length - 1);
  };

  useIntervalSlider(() => auto && moveToRight(), !isMouseOver ? speed : null);

  return (
    <div
      className={styles["container"]}
      onMouseLeave={() => setIsMouseOver(false)}
      onMouseOver={() => setIsMouseOver(true)}
    >
      <div
        className={`${styles["btn"]} ${styles["left"]}`}
        onClick={moveToLeft}
      >
        {"<"}
      </div>
      <div
        className={`${styles["btn"]} ${styles["right"]}`}
        onClick={moveToRight}
      >
        {">"}
      </div>
      <div
        className={styles["contents"]}
        ref={ref}
        style={{ width: `${length * 100}%` }}
      >
        {children[children.length - 1]}
        {children}
      </div>
    </div>
  );
};
