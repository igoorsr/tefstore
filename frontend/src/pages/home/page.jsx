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
        <h1 className={styles.title}>Bem vindo ao TEF Style</h1>
        <p className={styles.description}>
          Onde a moda encontra a simplicidade. Oferecemos uma seleção
          cuidadosamente selecionada de roupas unissex, projetadas para conforto
          e estilo. Se você está em busca de peças atemporais ou das últimas
          tendências, a TEF Style tem algo para todos. Eleve seu guarda-roupa
          com nossa coleção hoje!
        </p>
      </section>

      <section className={styles.productSection}>
        <div>
          <i>
            <img className={styles.image} src={homepage1} />
          </i>
          <h4 className={styles.imageTitle}>Eleve Seu Estilo Casual</h4>
          <p className={styles.imageDescription}>
            Adicione um toque de elegância descontraída com essa peça
            indispensável no seu guarda-roupa.
          </p>
        </div>

        <div>
          <i>
            <img className={styles.image} src={homepage2} />
          </i>
          <h4 className={styles.imageTitle}>
            Estilo e Conforto em Uma Só Peça
          </h4>
          <p className={styles.imageDescription}>
            Projetado para quem busca conforto sem abrir mão do estilo.
          </p>
        </div>

        <div>
          <i>
            <img className={styles.image} src={homepage3} />
          </i>
          <h4 className={styles.imageTitle}>Brilho Deslumbrante</h4>
          <p className={styles.imageDescription}>
            Joias que realçam sua beleza e adicionam um toque de sofisticação ao
            seu visual.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h1 className={styles.contactTitle}>Fale Conosco</h1>
        <p className={styles.contactDescription}>
          Tem alguma pergunta ou precisa de ajuda? Nossa equipe está aqui para
          ajudar. Envie-nos uma mensagem e retornaremos o mais breve possível.
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
