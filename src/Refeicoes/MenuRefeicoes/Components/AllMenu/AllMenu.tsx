import SingleMenu from "../SingleMenu/SingleMenu";
import menuData from "../../../dados";

function AllMenu() {
  return (
    <div>
      {menuData.map((item) => {
        return <SingleMenu key={item.id}{...item} />;
      })}
    </div>
  );
}

export default AllMenu;
