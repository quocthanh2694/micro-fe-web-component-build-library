import "./style.scss";
import React from "react";

interface Props {}

const workExperiences = [
  {
    id: 1,
    company: "Career Break — Content Creator & Independent Learning",
    period: "Jul 2025 – Present",
    highlights: [
      "Planned, edited and published sports & entertainment videos end-to-end.",
      "Practised AI-assisted development with Claude Code and kept this portfolio and Web Component library up to date.",
    ],
  },
  {
    id: 2,
    company: "Simpson Strong-Tie Viet Nam",
    role: "Senior & Lead FE",
    period: "Jun 2023 – Jul 2025",
    highlights: [
      "Led the Strong Rod Designer (Next.js + Babylon.js) and STUDS Web Component library projects.",
      "Bridged the US and Viet Nam teams; estimated and distributed sprint tasks.",
    ],
  },
  {
    id: 3,
    company: "Fram^ Ltd",
    role: "Senior & Lead FE",
    period: "Apr 2021 – Jun 2023",
    highlights: [
      "Led the EveHR web + mobile migration to Ionic React and TypeScript.",
      "Delivered features for Upscale for markets in LA, London, Thailand and Singapore.",
    ],
  },
  {
    id: 4,
    company: "MonsterPixel & Loya World",
    role: "Junior → Mid FE",
    period: "Oct 2018 – Apr 2021",
    highlights: [
      "Built the Loya POS web (React/Vue) and mobile (React Native) apps, set up CI/CD and mentored freshers.",
    ],
  },
  {
    id: 5,
    company: "FPT Software, HCMC",
    role: "Intern → Junior Full-stack",
    period: "Feb 2016 – Oct 2018",
    highlights: [
      "Full-stack work across Angular, ReactJS, React Native, Node.js and .NET.",
    ],
  },
];

export const WorkExperience = React.forwardRef<HTMLDivElement, {}>(
  ({}: Props, ref) => {
    return (
      <section className="experience container box" ref={ref}>
        <div className="experience__title text-center">
          <h4>Work experience</h4>
        </div>

        <ol className="experience__timeline">
          {workExperiences.map((item) => (
            <li className="experience__timeline-item" key={item.id}>
              <div className="experience__timeline-header">
                <h6 className="text-secondary">{item.company}</h6>
                <span className="text-xxs text-primary">{item.period}</span>
              </div>
              {!!item.role && (
                <span className="text-xs text-primary d-block">
                  {item.role}
                </span>
              )}
              <ul>
                {item.highlights.map((text) => (
                  <li key={text}>
                    <span className="text-xs">{text}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    );
  }
);
