// import Image from "next/image";
import dotenv from 'dotenv';
dotenv.config()
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>Lorem15</p>
          <div className={styles.btns}>
              <button className={styles.btn}>Learn More</button>
              <button className={styles.btn}>Contact</button>
          </div>
          <div className={styles.brands}>
              <Image src='/brands.png' alt='' fill className={styles.brandImg}/>
          </div>
      </div>
        <div className={styles.imageContainer}>
            <Image src='/hero.gif' alt='' fill className={styles.heroImg}/>
        </div>
    </div>
  );
}
