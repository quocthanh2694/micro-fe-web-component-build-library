import classNames from "classnames";
import { memo, useCallback, useState } from "react";

import useInterval from "src/hooks/useInterval";
import SliderArrowIcon from "src/icons/SliderArrowIcon";
import Image from "../../Image";
import "./styles.scss";

const Banner1 = require("src/assets/images/banner1.png").default;
const Banner2 = require("src/assets/images/banner2.png").default;
const Banner3 = require("src/assets/images/banner3.png").default;
const Banner4 = require("src/assets/images/banner4.png").default;

interface Props {}

const Slider = memo(({}: Props) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const sliders = [
    {
      id: 1,
      image: Banner1,
    },
    {
      id: 2,
      image: Banner2,
    },
    {
      id: 3,
      image: Banner3,
    },
    {
      id: 4,
      image: Banner4,
    },
  ];

  const { reset } = useInterval(() => {
    nextSlide(1);
  }, 3000);

  const nextSlide = useCallback(
    (n = 0) => {
      setSlideIndex((prev) => {
        let nextIndex = prev + n;
        if (nextIndex > sliders.length) {
          nextIndex = 1;
        } else if (nextIndex < 1) {
          nextIndex = sliders?.length;
        }
        // reset interval next slide
        reset();
        return nextIndex;
      });
    },
    [reset]
  );

  return (
    <section className="slider">
      {sliders.map((item, index) => (
        <div
          key={item.id}
          className={classNames({
            slider__item: true,
            show: slideIndex === index + 1,
          })}
        >
          <Image src={item.image} width="100%" height="auto" radius="4px" />
        </div>
      ))}
      <div className="slider__action">
        <div className="slider__action-prev" onClick={() => nextSlide(-1)}>
          <SliderArrowIcon />
        </div>
        <div className="slider__action-next" onClick={() => nextSlide(1)}>
          <SliderArrowIcon type="right" />
        </div>
      </div>
    </section>
  );
});

export default Slider;
