import React from "react";
import Title from "../UI/Title";
import Cont from "../UI/Container";
import styles from "./Promote.module.scss";
import Button from "../UI/Button";
type Props = {};

const PromotionConfirmation = (props: Props) => {
  const bookHandler = () => {};
  return (
    <Cont>
      <Title>6. Confirm your order</Title>
      <div className={styles.promotedSpot}>
        <h2>Promoted spot for xxx days</h2>
      </div>
      <h2>Order summary</h2>
      <table>
        <tr>
          <td>Subtotal</td>
          <td>ilosc dni x 100$</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>0,15,45 % x subtotal</td>
        </tr>
        <tr>
          <td>Total Price</td>
          <td>subtotal - discount $</td>
        </tr>
      </table>
      <Button onClickHandler={bookHandler}>Book and pay</Button>
    </Cont>
  );
};

export default PromotionConfirmation;
