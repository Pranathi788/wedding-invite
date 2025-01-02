import Image from "next/image";
import styles from "./page.module.css";
import ganesha from "../../../public/images/mainPage/ganesha.avif";
import pallakiAbbay from "../../../public/images/mainPage/pallaki_abbay-removebg-preview.avif";
import pallakiAmmayi from "../../../public/images/mainPage/Pallaki_Ammay_Fin-removebg-preview.avif";

const Invitation = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image src={pallakiAbbay} alt="image" width={133} height={83} />
          <Image src={pallakiAmmayi} alt="image" width={126} height={83} />
        </div>
        <div className={styles.ganeshaWrapper}>
          <Image src={ganesha} alt="image" width={65} height={65} />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>Wedding Invitation</div>
          <div className={styles.subTitle}>
            Join us to celebrate our wedding
          </div>
        </div>

        <div className={styles.groomDetailsWrapper}>
          <div className={styles.name}>Jnanendra</div>
          <div className={styles.context}>S/o Dandu Venkata Naga Varaprasada Raju</div>
          <div className={styles.context}>&</div>
          <div className={styles.context}>Smt Uma Devi</div>
        </div>
        {/* <div className={styles.and}>&</div> */}
        <div className={styles.brideDetailsWrapper}>
          <div className={styles.name}>Pranathi</div>
          <div className={styles.context}>D/o Vegesna Venkata Subba Raju</div>
          <div className={styles.context}>&</div>
          <div className={styles.context}>Smt Sitamani</div>
        </div>
        <div className={styles.sumuhurthamWrapper}>
          <div className={styles.name}>Sumuhurtham</div>
          <div className={styles.context}>On Friday</div>
          <div className={styles.context}>14, March,2025</div>
          <div className={styles.context}>Night at 3:38 am</div>
          <div className={styles.context}>{`(Early morning of Saturday)`}</div>
        </div>
        <div className={styles.venueWrapper}>
          <div className={styles.name}>Venue</div>
          <div className={styles.context}>Nirmala Devi Function hall</div>
          <div className={styles.context}>Pedamiram, West Godavari</div>
          <div className={styles.context}>Andhra Pradesh</div>
        </div>
        <div className={styles.dinnerWrapper}>
          <div className={styles.name}>Dinner</div>
          <div className={styles.context}>On Friday, 14 March, 2025</div>
          <div className={styles.context}>From 6:30 pm at venue</div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
