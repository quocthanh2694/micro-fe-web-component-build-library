import { memo } from "react";
import "./style.scss";
import { BookIcon, HomeIcon, MusicIcon, PieIcon } from "src/icons";

interface Menu {
  id: number;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

interface Props {
  menus: Menu[];
}

export const NavigationBar = memo(({ menus }: Props) => {
  return (
    <section className="navigation">
      {menus.map((menu) => (
        <div className="navigation__item" key={menu.id} onClick={menu.onClick}>
          {menu.icon}
          <span className="text-xs text-secondary">{menu.label}</span>
        </div>
      ))}
    </section>
  );
});
