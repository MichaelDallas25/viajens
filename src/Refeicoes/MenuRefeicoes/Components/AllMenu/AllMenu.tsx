import SingleMenu from "../SingleMenu/SingleMenu";

import "./menu.css";

export interface MenuItemProps {
  id: number;
  title: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}

export interface AllmenuProps {
  menuData: MenuItemProps[];
}

function AllMenu({ menuData }: AllmenuProps) {
  return (
    <section className="menu-section">
      <div className="menu-container">
        {menuData.map((item) => {
          return <SingleMenu key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default AllMenu;
