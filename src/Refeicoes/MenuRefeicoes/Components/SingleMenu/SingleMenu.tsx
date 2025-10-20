interface AllRefeicoesProps {
  id: number;
  title: string;
  category: string;
  price: number;
  desc: string;
  img: string;
}

function SingleMenu(item: AllRefeicoesProps) {
  const {title, category, price, desc, img } = item;
  return (
    <div>
      <section>
        <article>
          <div className="container">
            <img src={img} alt="menu" />
            <h2 className="title">{title}</h2>
            <p>{category}</p>
            <p>{price}</p>
            <p>{desc}</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SingleMenu;
