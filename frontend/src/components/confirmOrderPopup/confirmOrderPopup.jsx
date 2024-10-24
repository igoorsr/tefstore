import { Dialog } from "@mui/material";
import styles from "./confirmOrderPopup.module.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ConfirmOrderPopup({ open, onClose, onConfirm }) {
  const [formData, setFormData] = useState(null);
  const authData = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();

    if (!authData?.user?._id) {
      return navigate("/auth");
    } else {
      if (!formData?.pickupTime) {
        return;
      } else {
        const orderData = {
          userId: authData?.user?._id,
          pickupTime: formData?.pickupTime,
        };
        //console.log(orderData);
        onConfirm(orderData);
      }
    }
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className={styles.popupContainer}>
        <h2>Estamos quase lá...</h2>
        <p>
          Confirme seu pedido com a data atual. :{" "}
          <strong>{new Date().toLocaleDateString()}</strong>. Qual horário
          estimado você prefere que seu pedido chegue em casa?
        </p>
        <form className={styles.formContainer}>
          <TextField
            required
            className={styles.formTime}
            onChange={handleFormDataChange}
            type="time"
            name="pickupTime"
          />
          <div className={styles.confirmBtns}>
            <button className={styles.cancelBtn} onClick={onClose}>
              Cancelar
            </button>
            <button onClick={handleConfirm}>Confirmar</button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}
