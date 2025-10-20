import menuData from "../../../dados";
import SingleMenu from "../SingleMenu/SingleMenu";

function BreakFast() {
  return (
    <>
      {[0, 3, 6].map((index) => (
        <SingleMenu key={menuData[index].id} {...menuData[index]} />
      ))}
    </>
  );
}

export default BreakFast;
