import menuData from "../../../dados";
import SingleMenu from "../SingleMenu/SingleMenu";

function Lunch() {
  return (
    <>
      {[1, 4, 7].map((index) => (
        <SingleMenu key={menuData[index].id} {...menuData[index]} />
      ))}
    </>
  );
}

export default Lunch;
