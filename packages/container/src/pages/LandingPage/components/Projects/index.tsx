import React from "react";
import Image from "src/components/Image";
import "./style.scss";

interface Props {}

export const Projects = React.forwardRef<HTMLDivElement, {}>(
  ({}: Props, ref) => {
    const projects = [
      {
        id: 1,
        name: "EveHR",
        image: require("src/assets/images/evehr.png").default,
        description: `Vietnam's leading Employee Benefits and Recognition platform. Connecting employee and managing all of their benefits in the same place. Recognise your peers, redeem hot reward and catch up with internal news.`,
        ref: "https://www.evehr.vn",
      },
      {
        id: 2,
        name: "Loya One",
        image: require("src/assets/images/loyaone.png").default,
        description: `Software as a POS, manage selling, dashboard, warehouse, promotion, loyalty… for stores. The client application has orders via eMenu, sharing orders together between multiple devices, table QR code scanning to order at the store, and delivery—payment via bank transfer, VNPAY.`,
        ref: "https://loya.one",
      },
      {
        id: 3,
        name: "Piano Marvel",
        image: require("src/assets/images/pianomarvel.png").default,
        description: `This project has a web application and one mobile app on iOS. The product has features like managing users, and songs, drawing music sheets, communicating with plugins on Win/Mac to play songs, running the cursor follow music, and calculator score after play. The software is used to teach piano, drum, and guitar at schools in the US.`,
        ref: "https://pianomarvel.com",
      },
      {
        id: 4,
        name: "LotusCargolines",
        image: require("src/assets/images/lcl.png").default,
        description: `This project has a web application and two mobile apps used for managing shipping packages from the US to Vietnam. The web is used for managing district, state, city, customers, drivers, packages, membership cards, invoices, and reports... The one mobile app is for drivers to ship packages, view, and update status shipments...; the other one is for customers used to view shipments of customers, view membership card info…`,
      },
    ];

    return (
      <section className="project container box" ref={ref}>
        <div className="project__title text-center">
          <h4>Projects</h4>
        </div>
        {projects.map((prj) => (
          <div className="project__item" key={prj.id}>
            <div className="project__item-image">
              <Image radius="8px" src={prj.image} width="90px" height="90px" />
            </div>
            <div className="project__item-data">
              <h6 className="project__item-data-title text-secondary">
                {prj.name}
              </h6>
              <ul>
                <li>
                  <span
                    className="text-xxs"
                    style={
                      prj.id === 1
                        ? { maxWidth: "735px", display: "block" }
                        : undefined
                    }
                  >
                    {prj.description}
                  </span>
                </li>
                {!!prj.ref && (
                  <li className="highlight">
                    <span className="text-secondary text-xxs">
                      Ref:&nbsp;
                      <a href={prj.ref} target="_blank">
                        <span className="text-link text-xxs">{prj.ref}</span>
                      </a>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </section>
    );
  }
);
