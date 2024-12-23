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
          <a className={styles.number} href="tel:+919989089278">
            +91 9989089278
          </a>
          <a className={styles.number} href="tel:+918008556538">
            +91 8008556538
          </a>
        </div>
      </main>
    </div>
  );
}
