import { Wrapper } from "./Nav.style";
import Badge from "@material-ui/core/Badge/Badge";
import { ShoppingCart } from "@material-ui/icons";

const Nav = () => {
  return (
    <Wrapper>
      <div className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2 d-none d-md-inline-block" href="test">
            Tour
          </a>

          <a className="py-2" href="test">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Nav;
