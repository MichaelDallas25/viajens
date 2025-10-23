import SingleMenu from "../SingleMenu/SingleMenu";
export interface MenuItemProps {
  id: number;
  title: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}

export interface BreakFastProps {
  menuData: MenuItemProps[];
}

function BreakFast({ menuData }: BreakFastProps) {
  const filterItems = menuData.filter(
    (item) => item.category.toLowerCase() === "breakfast"
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

export default BreakFast;
