import { memo } from "react";
import "./style.scss";
import Image from "src/components/Image";
const banner = require("src/assets/images/worktable.png");

interface Props {}

export const WorkExperience = memo(({}: Props) => {
  const workExperiences = [
    "I have 8 years of experience in Front-end Development with savvy skills in developing and executing various projects that are applied to Javascript and its related technologies such as ReactJS.",
    "I love researching new technologies and learning new Frameworks, libraries, clean code, and best practices to become a better engineer.",
    "I love working in a work environment well, dynamically, and long-term. And I would love to become a leader or more than that.",
  ];
  return (
    <section className="experience container box">
      <div className="experience__title text-center">
        <h4>Work experience</h4>
      </div>

      <div className="experience__content">
        <div className="experience__content-image">
          <Image radius="8px" src={banner.default} width="274" height="154px" />
        </div>
        <div className="experience__content-data">
          <ul>
            {workExperiences.map((text, index) => (
              <li key={index}>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
