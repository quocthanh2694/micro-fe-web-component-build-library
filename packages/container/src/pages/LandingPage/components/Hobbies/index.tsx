import { memo } from "react";
import "./style.scss";
import Image from "src/components/Image";
const swimming = require("src/assets/images/swimming.png").default;
const traveling = require("src/assets/images/travel.png").default;
const walking = require("src/assets/images/walking.png").default;

interface Props {}

export const Hobbies = memo(({}: Props) => {
  const hobbies = [
    {
      id: 1,
      label: "Swimming",
      image: swimming,
    },
    {
      id: 2,
      label: "Traveling",
      image: traveling,
    },
    {
      id: 3,
      label: "Walking",
      image: walking,
    },
  ];
  return (
    <section className="hobbies container box">
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
              />
            </div>
            <div className="hobbies__item-label text-primary">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
});
