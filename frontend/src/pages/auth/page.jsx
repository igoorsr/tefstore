import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import styles from "./page.module.css";
import authServices from "../../services/auth";
import { LuLogIn } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/page";

export default function Auth() {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState(null);
  const { login, signup, authLoading } = authServices();

  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("auth"));

  useEffect(() => {
    if (authData) {
      return navigate("/profile");
    }
  }, [authData]);

  const handleChangeFormType = () => {
    setFormData(null);
    if (formType === "login") {
      setFormType("signup");
    } else {
      setFormType("login");
    }
  };

  const handleFormDataChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    switch (formType) {
      case "login":
        login(formData);
        break;
      case "signup":
        if (formData.password !== formData.confirmPassword) {
          console.log("Passwords do not match");
          return;
        }
        signup(formData);
        break;
    }
  };

  if (authLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.authPageContainer}>
      {formType === "login" ? (
        <>
          <h1 className={styles.title}>Logar</h1>
          <button
            className={styles.handleTypeButton}
            onClick={handleChangeFormType}
          >
            Ainda não se cadastrou? Clique aqui
          </button>
          <form onSubmit={handleSubmitForm}>
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Senha"
              type="password"
              name="password"
              onChange={handleFormDataChange}
            />
            <button className={styles.confirmButton} type="submit">
              Logar
              <LuLogIn />
            </button>
          </form>
        </>
      ) : null}

      {formType === "signup" ? (
        <>
          <h1 className={styles.title}>Cadastrar</h1>
          <button
            className={styles.handleTypeButton}
            onClick={handleChangeFormType}
          >
            Já tem uma conta? Clique aqui
          </button>
          <form onSubmit={handleSubmitForm}>
            <TextField
              required
              label="Nome completo"
              type="fullname"
              name="fullname"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Senha"
              type="password"
              name="password"
              onChange={handleFormDataChange}
            />
            <TextField
              required
              label="Confirme a senha"
              type="password"
              name="confirmPassword"
              onChange={handleFormDataChange}
            />
            <button className={styles.confirmButton} type="submit">
              Cadastrar
              <LuLogIn />
            </button>
          </form>
        </>
      ) : null}
    </div>
  );
}
