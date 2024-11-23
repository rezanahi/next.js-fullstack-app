import styles from './about.module.css'
import Image from "next/image";

export const metadata = {
    title: 'About'
}

function About () {

    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subTitle}>About Agency</h2>
                <h1 className={styles.title}>We Create digital ideas that are bigger , bolder , braver and better</h1>
                <p className={styles.desc}>
                    We Create digital ideas that are bigger , bolder , braver , and better . we believe im good ideas flexibility and precission were worlds our special team best and bs
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>+10K</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>+10K</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>+10K</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src='/about.png' alt='About Image' fill/>
            </div>
        </div>
    )
}

export default About