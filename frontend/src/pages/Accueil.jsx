import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/emmaus-connect-logo.svg";
import styles from "./Accueil.module.css";
import PhoneForm from "../components/phoneForm/PhoneForm";

function Accueil() {
  return (
    <div className={styles.accueilContainer}>
      <nav className={styles.navbarContainer}>
        <div className={styles.emmausLogoContainer}>
          <img className={styles.logo} src={logo} alt="emmaus connect logo" />
        </div>
        <Link to="/connexion">
          <button type="button" className={styles.connexionButton}>
            Se connecter
          </button>
        </Link>
      </nav>
      <PhoneForm />
      <footer className={styles.footerContainer}>
        <ul className={styles.listContainer}>
          <li>Mentions légales</li>
          <li>Politique de confidentialité</li>
          <li>Emmaûs Connect avec LaCollecte.tech</li>
        </ul>
      </footer>
    </div>
  );
}

export default Accueil;
