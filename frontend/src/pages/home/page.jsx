import styles from "./page.module.css";
import homepage1 from "/images/homepage/homepage1.png";
import homepage2 from "/images/homepage/homepage2.png";
import homepage3 from "/images/homepage/homepage3.png";
import {
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <section>
        <h1 className={styles.title}>Welcome to TEF Style</h1>
        <p className={styles.description}>
          Where fashion meets simplicity. We offer a carefully curated selection
          of unisex apparel designed for comfort and style. Whether you're
          looking for timeless pieces or the latest trends, TEF Style has
          something for everyone. Elevate your wardrobe with our collection
          today!
        </p>
      </section>

      <section className={styles.productSection}>
        <div>
          <i>
            <img className={styles.image} src={homepage1} />
          </i>
          <h4 className={styles.imageTitle}>Elevate Your Casual Style</h4>
          <p className={styles.imageDescription}>
            Add a touch of laid-back elegance with this must-have piece in your
            wardrobe.
          </p>
        </div>

        <div>
          <i>
            <img className={styles.image} src={homepage2} />
          </i>
          <h4 className={styles.imageTitle}>Style and Comfort in One</h4>
          <p className={styles.imageDescription}>
            Designed for those who seek comfort without compromising on style.
          </p>
        </div>

        <div>
          <i>
            <img className={styles.image} src={homepage3} />
          </i>
          <h4 className={styles.imageTitle}>Dazzling Sparkle</h4>
          <p className={styles.imageDescription}>
            Jewelry that enhances your beauty and adds a touch of sophistication
            to your look.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <p className={styles.contactDescription}>
          Have any questions or need assistance? Our team is here to help. Send
          us a message, and we'll get back to you as soon as possible.
        </p>
        <div className={styles.socialButtonsContainer}>
          <button className={styles.socialButton}>
            <FaInstagram /> Instagram
          </button>
          <button className={styles.socialButton}>
            <FaFacebookSquare /> Facebook
          </button>
          <button className={styles.socialButton}>
            <FaWhatsapp /> Whatsapp
          </button>
          <button className={styles.socialButton}>
            <FaMapMarkerAlt />
            Location
          </button>
        </div>
      </section>
    </div>
  );
}
