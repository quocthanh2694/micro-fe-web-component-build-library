import React from "react";
import "./style.scss";

interface Props {}

const skillGroups = [
  {
    id: 1,
    label: "Core",
    items: ["JavaScript", "TypeScript", "HTML", "CSS / SCSS"],
  },
  {
    id: 2,
    label: "Frameworks",
    items: ["React.js", "Next.js", "Web Components (Lit)", "Node.js", "Angular", "Vue.js", "React Native", "Ionic"],
  },
  {
    id: 3,
    label: "UI",
    items: ["MUI", "Ant Design", "Bootstrap", "Styled Components", "Tailwind CSS", "Storybook", "Figma"],
  },
  {
    id: 4,
    label: "State & Data",
    items: ["Redux / Redux-saga", "React Query", "Zustand", "GraphQL", "WebSocket", "MQTT", "IndexedDB"],
  },
  {
    id: 5,
    label: "Tooling & Others",
    items: ["Micro-frontend", "Unit test", "E2E test", "Lighthouse", "Babylon.js", "Docker", "CI/CD", "Git", "Jira", "Firebase FCM", "Claude Code"],
  },
];

const certificates = [
  { id: 1, label: "Professional Scrum Master II (PSM II)", year: "2023" },
  { id: 2, label: "Agile Project Management Professional", year: "2024" },
  { id: 3, label: "English — EF SET B2, 1 year working directly with US teams", year: "" },
  { id: 4, label: "Diploma of Information Technology, HUTECH University", year: "2016" },
];

export const Skills = React.forwardRef<HTMLDivElement, {}>(
  ({}: Props, ref) => {
    return (
      <section className="skills container box" ref={ref}>
        <div className="skills__title text-center">
          <h4>Skills & Certificates</h4>
        </div>

        <div className="skills__content">
          <div className="skills__groups">
            {skillGroups.map((group) => (
              <div className="skills__group" key={group.id}>
                <h6 className="text-secondary">{group.label}</h6>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills__certificates">
            <h6 className="text-secondary">Certificates & Education</h6>
            <ul>
              {certificates.map((cert) => (
                <li key={cert.id}>
                  <span className="text-xs">
                    {cert.label}
                    {!!cert.year && (
                      <span className="text-xs text-primary"> ({cert.year})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
);
