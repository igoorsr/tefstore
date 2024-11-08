import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";
import { LuLogOut, LuTimer, LuAlertCircle, LuCheckCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import Loading from "../loading/page";

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
    return <Loading />;
  }

  const handleLogout = () => {
    logout();
    return navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <div>
        <h1 className={styles.titleName}>{authData?.user?.fullname}</h1>
        <h3 className={styles.emailName}>{authData?.user?.email}</h3>
      </div>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Deslogar
        <LuLogOut />
      </button>

      {ordersList?.length > 0 ? (
        <div className={styles.ordersContainer}>
          {ordersList.map((order) => (
            <div key={order._id} className={styles.orderContainer}>
              {order.pickupStatus === "A caminho" ? (
                <p className={`${styles.pickupStatus} ${styles.onway}`}>
                  <LuTimer />
                  {order.pickupStatus}
                </p>
              ) : null}
              {order.pickupStatus === "Entregue" ? (
                <p className={`${styles.pickupStatus} ${styles.delivered}`}>
                  <LuCheckCheck />
                  {order.pickupStatus}
                </p>
              ) : null}
              {order.pickupStatus === "Cancelado" ? (
                <p className={`${styles.pickupStatus} ${styles.canceled}`}>
                  <LuAlertCircle />
                  {order.pickupStatus}
                </p>
              ) : null}
              <p className={styles.info1}>{order.pickupTime}</p>
              {order.orderItems.map((item) => (
                <div key={item._id}>
                  <h4 className={styles.productName}>
                    {item.itemDetails[0].name}
                  </h4>
                  <p className={styles.info1}>Quantidade: {item.quantity}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.messageNoOrder}>
          Você ainda não tem pedidos
          <br />
          <Link className={styles.link} to={"/products"}>
            Clique aqui e veja nossos produtos!
          </Link>
        </div>
      )}
    </div>
  );
}
