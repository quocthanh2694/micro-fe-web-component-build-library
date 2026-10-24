import React from "react";
import Image from "src/components/Image";
import "./style.scss";

interface Props {}

interface Project {
  id: number;
  name: string;
  role: string;
  image?: string;
  description: string;
  highlights: string[];
  tech: string[];
  ref?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Strong Rod Designer",
    role: "FE Lead · Simpson Strong-Tie VN",
    image: require("src/assets/images/simpson-strong-tie.svg").default,
    description: `A web app that takes design input, calculates with the back-end API and renders the Strong Rod system for buildings in 2D/3D with Babylon.js.`,
    highlights: [
      "Built the Next.js project structure; estimated, split and assigned sprint tasks for a 2-member FE team.",
      "Optimised performance (FCP, LCP, image size, lazy loading, caching) and multi-tab form validation.",
      "Resolved high-severity security issues reported by Snyk; wrote unit and E2E tests.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Babylon.js",
      "React Query",
      "Zustand",
      "MUI",
      "RxDB",
      "IndexedDB",
      "React Hook Form",
    ],
    ref: "https://www.strongtie.com/products/lateral-systems/strong-rod-systems/ats/designer-tools/design-considerations",
  },
  {
    id: 2,
    name: "STUDS — Web Component Library",
    role: "FE Lead · Simpson Strong-Tie VN",
    image: require("src/assets/images/simpson-strong-tie.svg").default,
    description: `An internal UI library of atomic and composed components shared across projects. v1 shipped styled components built with Lit; v2 is a headless UI that separates logic from styles.`,
    highlights: [
      "Weekly syncs with the US team; distributed tasks across the US and Viet Nam teams.",
      "Monorepo (Turborepo) split into styles, library and a vanilla-JS playground.",
    ],
    tech: ["Lit", "Angular", "TypeScript", "Web Components", "SCSS", "Turborepo"],
    ref: "https://www.npmjs.com/package/@studs/styles",
  },
  {
    id: 3,
    name: "EveHR",
    role: "FE Lead",
    image: require("src/assets/images/evehr.png").default,
    description: `SaaS that connects employees and manages all of their benefits in one place: peer recognition, rewards, internal news and a social wall.`,
    highlights: [
      "Migrated the front-end to Ionic React + TypeScript for the dashboard portal and Android/iOS apps.",
      "Reviewed code, refactored to avoid unnecessary re-renders; set up Sentry, OpenReplay, Firebase FCM and CodePush.",
    ],
    tech: ["React", "TypeScript", "Ionic", "Capacitor", "React Native", "Redux-saga", "Storybook"],
    ref: "https://www.evehr.vn",
  },
  {
    id: 4,
    name: "Upscale",
    role: "Senior member",
    image: require("src/assets/images/goupscale.png").default,
    description: `A P&L-driven growth platform with central management, execution and tracking of engagement strategies, backed by a system that learns and recommends ideas.`,
    highlights: [
      "Pixel-perfect features across browsers, unit tests per component, and refactoring for performance.",
      "Markets: Los Angeles, London, Thailand, Singapore.",
    ],
    tech: ["React", "TypeScript", "Redux-saga", "Reselect", "GraphQL", "Sentry"],
    ref: "https://www.goupscale.com",
  },
  {
    id: 5,
    name: "Loya One",
    role: "Senior member · Loya World",
    image: require("src/assets/images/loyaone.png").default,
    description: `POS software for stores: sales, dashboard, warehouse, promotions and loyalty, with eMenu ordering, multi-device order sharing, table QR ordering, delivery and VNPAY payment.`,
    highlights: [
      "Built the web (React/Vue) and mobile (React Native) project structure; enhanced the Angular admin.",
      "Configured CI/CD and mentored fresher members.",
    ],
    tech: ["React", "React Native", "Angular", "Vue", "SSR", "MQTT", "Firebase FCM"],
    ref: "https://loya.one",
  },
  {
    id: 6,
    name: "Piano Marvel",
    role: "Junior member",
    image: require("src/assets/images/pianomarvel.png").default,
    description: `Web and iOS apps used in US schools to teach piano, drum and guitar: music sheets, plugin communication, a cursor that follows the music and scoring.`,
    highlights: [
      "Drew music sheets on canvas with a customised VexFlow and synced the cursor to the millisecond.",
      "Improved initial loading time by over 50%.",
    ],
    tech: ["Angular", "RxJS", "VexFlow", "HTML5 Canvas", "WebSocket", "jQuery"],
    ref: "https://pianomarvel.com",
  },
];

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export const Projects = React.forwardRef<HTMLDivElement, {}>(
  ({}: Props, ref) => {
    return (
      <section className="project container box" ref={ref}>
        <div className="project__title text-center">
          <h4>Projects</h4>
        </div>
        {projects.map((prj) => (
          <div className="project__item" key={prj.id}>
            <div className="project__item-image">
              {prj.image ? (
                <Image
                  radius="8px"
                  src={prj.image}
                  width="90px"
                  height="90px"
                  alt={prj.name}
                />
              ) : (
                <div className="project__item-placeholder" aria-hidden="true">
                  {getInitials(prj.name)}
                </div>
              )}
            </div>
            <div className="project__item-data">
              <h6 className="project__item-data-title text-secondary">
                {prj.name}
              </h6>
              <span className="text-xxs text-primary d-block project__item-data-role">
                {prj.role}
              </span>
              <span className="text-xs d-block project__item-data-description">
                {prj.description}
              </span>
              <ul>
                {prj.highlights.map((text) => (
                  <li key={text}>
                    <span className="text-xxs">{text}</span>
                  </li>
                ))}
                {!!prj.ref && (
                  <li className="highlight">
                    <span className="text-secondary text-xxs">
                      Ref:&nbsp;
                      <a
                        href={prj.ref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-link text-xxs">{prj.ref}</span>
                      </a>
                    </span>
                  </li>
                )}
              </ul>
              <div className="chips project__item-data-tech">
                {prj.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
);
