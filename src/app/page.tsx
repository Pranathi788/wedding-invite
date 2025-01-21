import Image from "next/image";
import styles from "./page.module.css";
import imageTop from "../../public/images/mainPage/imageTop.avif";
import imageSecondOne from "../../public/images/mainPage/imageSecondOne.avif";
import imageSecondTwo from "../../public/images/mainPage/imageSecondTwo.avif";
import imageThirdOne from "../../public/images/mainPage/imageThirdOne.avif";
import imageThirdTwo from "../../public/images/mainPage/imageThirdTwo.avif";
import finalLine from "../../public/images/mainPage/finalLine.avif";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${styles.mobile}`}>
        <div className={styles.title}>Jnanendra & Pranathi</div>
        <Image
          src={imageTop}
          className={styles.mobileHeader}
          alt="image"
          width={150}
          height={105}
        />
        <div className={styles.mobileLineOne}>
          <a
            className={`${styles.button} ${styles.mobileButtonOne}`}
            href="jnanendradandu/wedding-invite/invitation"
          >
            Invitation
          </a>
          <Image src={imageSecondOne} alt="image" width={125} height={187} />
        </div>

        <div className={styles.mobileLineTwo}>
          <Image src={imageSecondTwo} alt="image" width={166} height={125} />
          <a
            className={styles.button}
            href="https://maps.app.goo.gl/onSe6chhHAxwneUx5"
          >
            Maps
          </a>
        </div>
        <div className={styles.mobileLineThree}>
          <a className={styles.button}>Live Link</a>
          <Image src={imageThirdOne} alt="image" width={129} height={173} />
        </div>
        <div className={styles.mobileLineFour}>
          <Image src={imageThirdTwo} alt="image" width={197} height={151} />
          <a className={styles.button} href="/wedding-invite/contact">
            Contact
          </a>
        </div>
        <div className={styles.mobileLineFive}></div>
      </main>
      <main className={`${styles.main} ${styles.desktop}`}>
        <div className={styles.title}>Jnanendra & Pranathi</div>

        <div className={styles.imageWrapper}>
          <div className={`${styles.imageLine} ${styles.lineOne}`}>
            <Image src={imageTop} alt="image" width={150} height={105} />
          </div>
          <div className={`${styles.imageLine} ${styles.lineTwo}`}>
            <Image src={imageSecondOne} alt="image" width={125} height={187} />
            <Image src={imageSecondTwo} alt="image" width={166} height={125} />
          </div>
          <div className={`${styles.imageLine} ${styles.lineThree}`}>
            <Image src={imageThirdOne} alt="image" width={129} height={173} />
            <Image src={imageThirdTwo} alt="image" width={197} height={151} />
          </div>
          <div className={`${styles.imageLine} ${styles.lineFour}`}>
            <Image src={finalLine} alt="image" width={361} height={269} />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <a className={styles.button} href="/wedding-invite/invitation">
            Invitation
          </a>
          <a
            className={styles.button}
            href="https://maps.app.goo.gl/onSe6chhHAxwneUx5"
          >
            Maps
          </a>
          <a className={styles.button}>Live Link</a>
          <a className={styles.button} href="/wedding-invite/contact">
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
