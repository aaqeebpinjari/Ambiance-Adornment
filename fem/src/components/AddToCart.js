import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const [show3DModel, setShow3DModel] = useState(false);
  const toggle3DModel = () => {
    setShow3DModel(!show3DModel);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="image-wrapper">
        <div className="colors">
          <p>
            Color:
            {colors.map((curColor, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: curColor }}
                  className={
                    color === curColor ? "btnStyle active" : "btnStyle"
                  }
                  onClick={() => setColor(curColor)}
                >
                  {color === curColor ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            })}
          </p>
        </div>

        {/* add to cart  */}
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />

        <div className="buttons">
          <NavLink
            to="/cart"
            onClick={() => addToCart(id, color, amount, product)}
          >
            <Button className="btn">Add To Cart</Button>
          </NavLink>

          <Button className="btn" onClick={toggle3DModel}>
            3D Model
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  /* Your button styles here... */

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem; /* Adjust the margin as needed */
  }
`;

export default AddToCart;