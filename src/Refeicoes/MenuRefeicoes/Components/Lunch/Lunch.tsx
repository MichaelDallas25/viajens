import SingleMenu from "../SingleMenu/SingleMenu";
export interface MenuItemProps {
  id: number;
  title: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}

export interface LunchProps {
  menuData: MenuItemProps[];
}

function Lunch({ menuData}: LunchProps) {
  const filterItems = menuData.filter(
    (item) => item.category.toLowerCase() === "lunch"
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

export default Lunch;
