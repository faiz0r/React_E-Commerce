import { Wrapper } from "./Nav.style";
import Badge from "@material-ui/core/Badge/Badge";
import { ShoppingCart } from "@material-ui/icons";
import CameraIcon from "@material-ui/icons/Camera";
import { CartItemType } from "../../App";

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
          <a className="py-2 d-none d-md-inline-block" href="test">
            <CameraIcon />
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/#">
            Tour
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/#">
            Product
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/#">
            Features
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/#">
            Enterprise
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/#">
            Support
          </a>
          <a className="py-2 d-none d-md-inline-block" href="/#">
            Pricing
          </a>
          <a className="py-2" href="/#">
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
