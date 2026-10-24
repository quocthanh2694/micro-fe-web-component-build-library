import React from "react";
import CustomButton from "src/components/CustomButton";
import { SOCIAL_LINKS, URI } from "src/constant/constant";
import "./style.scss";

interface Props {}

const points = [
  "This page is the Module Federation host (container). The /shop app is a separate remote, built and deployed on its own, then loaded at runtime with React.lazy.",
  "Host and remote share single instances of React, React DOM and React Router.",
  "Both use <pj1-input>, a form-associated custom element (Shadow DOM, attachInternals) published to npm as thanh-pj1-ui-lib. The same component also runs in the Vue and Angular demo apps.",
];

export const AboutSite = React.forwardRef<HTMLDivElement, {}>(
  ({}: Props, ref) => {
    const handleOpenDemo = () => {
      window.location.href = URI.SHOP;
    };

    return (
      <section className="about-site container box" ref={ref}>
        <div className="about-site__title text-center">
          <h4>About this site</h4>
        </div>

        <div className="about-site__diagram" aria-label="Architecture diagram">
          <div className="about-site__node">
            <strong>Container</strong>
            <span className="text-xxs">host · this page</span>
          </div>
          <div className="about-site__arrow text-xxs">
            loads at runtime →
          </div>
          <div className="about-site__node">
            <strong>Shop</strong>
            <span className="text-xxs">remote · /shop</span>
          </div>
          <div className="about-site__node about-site__node--lib">
            <strong>&lt;pj1-input&gt;</strong>
            <span className="text-xxs">
              Web Component library · used by React, Vue, Angular
            </span>
          </div>
        </div>

        <ul className="about-site__points">
          {points.map((text) => (
            <li key={text}>
              <span className="text-xs">{text}</span>
            </li>
          ))}
        </ul>

        <div className="about-site__actions">
          <CustomButton onClick={handleOpenDemo}>
            View live micro-frontend demo →
          </CustomButton>
          <a
            href={SOCIAL_LINKS.REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-xs"
          >
            Source on GitHub
          </a>
          <a
            href={SOCIAL_LINKS.NPM_UI_LIB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-xs"
          >
            thanh-pj1-ui-lib on npm
          </a>
        </div>
      </section>
    );
  }
);
