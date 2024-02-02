import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, img, category, price, stock}) => {
  console.log('render de item: ', id)

  return (
    <div className="card CardItem" style={{ width: "250px" }}>
      <div className="image-container">
        <img src={img} alt={name} className="ItemImg" />
      </div>

        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{category}</h2>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Available Stock: {stock}</p>

        <Link
          className="btn btn-secondary"
          style={{ margin: "10px 0" }}
          to={`/detail/${id}`}
        >
          Ver detalle
        </Link>
    </div>
  );
};

export default Item;