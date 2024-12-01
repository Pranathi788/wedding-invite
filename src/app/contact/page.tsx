import Image from "next/image";
import styles from "./page.module.css";
import contact from "../../../public/images/mainPage/contact.avif";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.title}>Contact us at ...</div>
        <div className={styles.imageWrapper}>
          <Image src={contact} alt="image" width={280} height={150} />
        </div>
        <div className={styles.numberWrapper}>
          <a className={styles.number} href="tel:+919491978899">
            +91 9491978899
          </a>
          <a className={styles.number} href="tel:+919963549497">
            +91 9963549497
          </a>
        </div>
      </main>
    </div>
  );
}
