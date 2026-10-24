import React from "react";
import Image from "src/components/Image";
import "./style.scss";
// TODO: replace with a badminton image
const badminton = require("src/assets/images/bmt.jpeg").default;
const traveling = require("src/assets/images/travel.png").default;

interface Props {}

export const Hobbies = React.forwardRef<HTMLDivElement, {}>(
  ({}: Props, ref) => {
    const hobbies = [
      {
        id: 1,
        label: "Badminton",
        image: badminton,
      },
      {
        id: 2,
        label: "Traveling",
        image: traveling,
      },
    ];
    return (
      <section className="hobbies container box" ref={ref}>
        <div className="hobbies__title text-center">
          <h4>Hobbies</h4>
        </div>

        <div className="hobbies__item">
          {hobbies.map((item) => (
            <div className="hobbies__item-wrap" key={item.id}>
              <div className="hobbies__item-image">
                <Image
                  radius="50%"
                  src={item.image}
                  width="120px"
                  height="120px"
                  alt={item.label}
                />
              </div>
              <div className="hobbies__item-label text-primary">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
);
