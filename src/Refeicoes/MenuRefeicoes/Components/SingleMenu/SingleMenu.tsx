interface AllRefeicoesProps {
  id: number;
  title: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}

import "./single.css";

function SingleMenu(item: AllRefeicoesProps) {
  const { title, price, desc, img } = item;
  return (
    <div className="menu-item">
      <div className="image-container">
        <img className="img" src={img} alt="menu" />
      </div>
      <h2 className="title">{title}</h2>

      <p className="price">{price}</p>
      <p className="desc">{desc}</p>
    </div>
  );
}

export default SingleMenu;
