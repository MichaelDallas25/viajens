import SingleMenu from "../SingleMenu/SingleMenu";

export interface MenuItemProps {
  id: number;
  title: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}

export interface ShakesProps {
  menuData: MenuItemProps[];
}

function Shakes({ menuData}: ShakesProps) {

  const filterItems = menuData.filter(
    (item) => item.category.toLowerCase() === "shakes"
  );

  return (
    <section>
      <div className="menu-container">
        {filterItems.map((item) => (
          <SingleMenu key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Shakes;