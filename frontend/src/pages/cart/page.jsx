import { useState } from "react";
import { useCartContext } from "../../contexts/useCartContext";
import styles from "./page.module.css";
import { LuMinusCircle } from "react-icons/lu";
import ConfirmOrderPopup from "../../components/confirmOrderPopup/confirmOrderPopup";
import productServices from "../../services/products";

export default function Cart() {
  const { cartItems, updateCartItems, removeFromCart, clearCart } =
    useCartContext();

  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const { sendOrder } = productServices();

  const handleChangeItemQty = (mode, itemId) => {
    const updatedCartItem = cartItems.map((item) => {
      if (item._id === itemId) {
        if (mode === "less" && item.quantity > 1) {
          item.quantity -= 1;
        } else if (mode === "more") {
          item.quantity += 1;
        }
      }

      return item;
    });

    updateCartItems(updatedCartItem);
  };

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setConfirmPopupOpen(!confirmPopupOpen);
  };

  const handleConfirmOrder = (productData) => {
    productData.items = cartItems.map((item) => {
      return { productId: item._id, quantity: item.quantity };
    });
    sendOrder(productData);
    setConfirmPopupOpen(!confirmPopupOpen);
    clearCart();
  };

  if (!cartItems.length) {
    return (
      <div>
        <h1>Your cart is empty... :/</h1>
        <button>See our specialities!</button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.pageContainer}>
        <h1>Your items:</h1>
        <section>
          <div className={styles.itemsListContainer}>
            {cartItems.map((item) => (
              <div className={styles.itemContainer} key={item._id}>
                <img src={item.imgUrl} alt="" />
                <div className={styles.itemContent}>
                  <h2>{item.name}</h2>
                  <p>[{String(item.materials)}]</p>
                  <p>{item.description}</p>
                  <div className={styles.portionContainer}>
                    <p>Quantity:</p>
                    <p>{item.quantity}</p>
                    <div className={styles.portionBtns}>
                      <button
                        onClick={() => {
                          handleChangeItemQty("less", item._id);
                        }}
                      >
                        -
                      </button>
                      <button
                        onClick={() => {
                          handleChangeItemQty("more", item._id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className={styles.removeButton}
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                  >
                    <LuMinusCircle /> Remove item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <button className={styles.confirmBtn} onClick={handleOpenPopup}>
          Confirm your product!
        </button>
      </div>

      <ConfirmOrderPopup
        open={confirmPopupOpen}
        onClose={handleOpenPopup}
        onConfirm={handleConfirmOrder}
      />
    </>
  );
}
