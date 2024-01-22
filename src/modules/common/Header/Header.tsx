import { useNavigate } from "react-router-dom";
import "./Header.css";
import  {useContext} from "react";
import { DataContext } from "../../../context/DataProvider";



function Header() {
  const {cartItemCount} = useContext(DataContext);
  const navigate = useNavigate();

  const goToHome = () => {
      navigate("/");

  }

  const goToCart = () => {
    navigate("/cart");


  }
  return (
    <header>
      <div className="header">
        <div onClick={goToHome}className="logo">
          <h4 className="sweet">Sweet Dish</h4>
          <img
                  src = "assets/breakfast.png"
                  width="45x"
                  height="45x"
                  style={{margin: 10}}
                  alt="icon"
                />
        </div>
        <div className="d-flex" style={{width: 300, justifyContent: "space-evenly", paddingTop: 3}}>
 
        <i onClick={goToCart}className="fa fa-shopping-cart cart-icon"></i>
        <span className="cart-count">{cartItemCount}</span>
        <h5 className="login">Login</h5>
        <h5 className="register">Sign Up</h5>

      </div>
    </div>
  </header>
  )
}

export default Header;