// Types
import { CartItemType } from "../../App";
// Styles
import { Wrapper } from "./Item.style";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <div className="card box-shadow">
      <img src={item.image} alt={item.title} />
      <div className="card-body">
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-sm btn-outline-secondary"
              type="button"
            >
              Add to Cart
            </button>
            <button className="btn btn-sm btn-outline-secondary" type="button">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Item;
