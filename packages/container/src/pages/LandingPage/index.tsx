import { Footer } from "src/components/layout/Footer";
import { Hobbies } from "./components/Hobbies";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { WorkExperience } from "./components/WorkExperience";
import "./style.scss";
import CustomButton from "src/components/CustomButton";
import { NavigationBar } from "src/components/layout/NavigationBar";
import React, { useRef } from "react";
import { BookIcon, HomeIcon, MusicIcon, PieIcon } from "src/icons";

const ShoppingNow = () => {
  const handleShoppingNow = () => {
    window.location.href = `/shop`;
  };

  return (
    <div className="container">
      <div className="layout__header">
        <CustomButton onClick={handleShoppingNow}>Shopping Now</CustomButton>
      </div>
    </div>
  );
};

const Header = React.forwardRef<HTMLDivElement, {}>((props, ref) => (
  <div ref={ref} className="layout__background"></div>
));

export const LandingPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const workExpRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const hobbyRef = useRef<HTMLDivElement>(null);

  const handleScroll = (element: HTMLDivElement | null) => {
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top,
      behavior: "smooth",
    });
  };

  const menus = [
    {
      id: 1,
      label: "Home",
      icon: <HomeIcon />,
      onClick: () => handleScroll(headerRef.current),
    },
    {
      id: 2,
      label: "Work",
      icon: <BookIcon />,
      onClick: () => handleScroll(workExpRef.current),
    },
    {
      id: 3,
      label: "Project",
      icon: <PieIcon />,
      onClick: () => handleScroll(projectRef.current),
    },

    {
      id: 4,
      label: "Hobby",
      icon: <MusicIcon />,
      onClick: () => handleScroll(hobbyRef.current),
    },
  ];

  return (
    <div className="layout">
      <NavigationBar menus={menus} />

      <Header ref={headerRef} />
      <ShoppingNow />

      <Profile />
      <WorkExperience ref={workExpRef} />
      <Projects ref={projectRef} />
      <Hobbies ref={hobbyRef} />

      <Footer />
    </div>
  );
};
