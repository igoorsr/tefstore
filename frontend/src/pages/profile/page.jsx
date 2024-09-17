import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";

export default function Profile() {
  const { logout } = authServices();
  const { getUserOrders, orderLoading, refetchOrders, ordersList } =
    orderServices();
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (!authData) {
      return navigate("/auth");
    } else if (refetchOrders) {
      getUserOrders(authData?.user?._id);
    }
  }, [authData, refetchOrders]);

  if (orderLoading) {
    return <h1>Loading...</h1>;
  }

  const handleLogout = () => {
    logout();
    return navigate("/");
  };

  console.log(ordersList);

  return (
    <div className={styles.pageContainer}>
      <div>
        <h1 className={styles.titleName}>{authData?.user?.fullname}</h1>
        <h3 className={styles.emailName}>{authData?.user?.email}</h3>
      </div>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>

      {ordersList?.length > 0 ? (
        <div className={styles.ordersContainer}>
          {ordersList.map((order) => (
            <div key={order._id} className={styles.orderContainer}>
              <p className={styles.info1}>{order.pickupTime}</p>
              <p className={styles.info1}>{order.pickupStatus}</p>
              {order.orderItems.map((item) => (
                <div key={item._id}>
                  <h4 className={styles.productName}>
                    {item.itemDetails[0].name}
                  </h4>
                  <p className={styles.info1}>Quantity: {item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>You do not have orders yet</div>
      )}
    </div>
  );
}
