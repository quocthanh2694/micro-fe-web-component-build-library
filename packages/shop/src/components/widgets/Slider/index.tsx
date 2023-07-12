import classNames from "classnames";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { getSliderApi } from "src/apis/sliderApi";
import { SLIDER_DELAY } from "src/constants/constant";
import useInterval from "src/hooks/useInterval";
import SliderArrowIcon from "src/icons/SliderArrowIcon";
import { unifyEvent } from "src/utils/utils";
import Image from "../../Image";
import "./styles.scss";

const sliders = getSliderApi();

interface Props {}

const Slider = memo(({}: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [slideIndex, setSlideIndex] = useState(1);

  const { reset } = useInterval(() => {
    nextSlide(1);
  }, SLIDER_DELAY);

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

  useEffect(() => {
    let locked = false;
    let x0 = -1;

    function start(e: MouseEvent | TouchEvent) {
      x0 = unifyEvent(e).clientX;
      locked = true;
    }

    function move(e: MouseEvent | TouchEvent) {
      if (locked) {
        // stop vertical scroll event
        e.preventDefault();
      }
    }

    function end(e: MouseEvent | TouchEvent) {
      if (!locked) return;
      locked = false;

      let x1 = unifyEvent(e).clientX;
      const swipeLength = x1 - x0;

      if (swipeLength > 0) {
        // swipe left
        nextSlide(-1);
      } else {
        // swipe right
        nextSlide(1);
      }
    }
    if (!sliderRef?.current) return;
    sliderRef.current.addEventListener("mousedown", start, false);
    sliderRef.current.addEventListener("touchstart", start, false);

    sliderRef.current.addEventListener("mousemove", move, false);
    sliderRef.current.addEventListener("touchmove", move, false);

    sliderRef.current.addEventListener("mouseup", end, false);
    sliderRef.current.addEventListener("touchend", end, false);

    return () => {
      if (!sliderRef?.current) return;
      sliderRef.current.removeEventListener("mousedown", start, false);
      sliderRef.current.removeEventListener("touchstart", start, false);

      sliderRef.current.removeEventListener("mousemove", move, false);
      sliderRef.current.removeEventListener("touchmove", move, false);

      sliderRef.current.removeEventListener("mouseup", end, false);
      sliderRef.current.removeEventListener("touchend", end, false);
    };
  }, [nextSlide, sliderRef?.current]);

  return (
    <section className="slider" ref={sliderRef}>
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
