import menuData from "../../../dados";
import SingleMenu from "../SingleMenu/SingleMenu";

function Shakes() {
  return (
    <>
      {[2, 5, 8].map((index) => (
        <SingleMenu key={menuData[index].id} {...menuData[index]} />
      ))}
    </>
  );
}

export default Shakes;
