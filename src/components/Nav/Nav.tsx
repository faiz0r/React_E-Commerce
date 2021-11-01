import { Wrapper } from "./Nav.style";
import { ShoppingCart } from "@material-ui/icons";
import { CartItemType } from "../../App";
import Badge from "@material-ui/core/Badge/Badge";
import CameraIcon from "@material-ui/icons/Camera";

type Props = {
  cartItems: CartItemType[];
  totalItems: (cartItems: CartItemType[]) => number;
  cartOpen: (boolean: true) => void;
};

const Nav: React.FC<Props> = ({ cartItems, totalItems, cartOpen }) => {
  return (
    <Wrapper>
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a id="icon" className="d-md-inline-block" href="/#">
            <CameraIcon />
          </a>
          <a id="tour" className="py-2 d-none d-md-inline-block" href="/#">
            Tour
          </a>
          <a id="product" className="py-2 d-none d-md-inline-block" href="/#">
            Product
          </a>
          <a id="features" className="py-2 d-none d-md-inline-block" href="/#">
            Features
          </a>
          <a
            id="enterprise"
            className="py-2 d-none d-md-inline-block"
            href="/#"
          >
            Enterprise
          </a>
          <a id="support" className="py-2 d-none d-md-inline-block" href="/#">
            Support
          </a>
          <a id="pricing" className="py-2 d-none d-md-inline-block" href="/#">
            Pricing
          </a>
          <a id="cart" className="d-none d-md-inline-block" href="/#">
            <Badge
              onClick={() => cartOpen(true)}
              badgeContent={totalItems(cartItems)}
              color="primary"
            >
              <ShoppingCart />
            </Badge>
          </a>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Nav;
