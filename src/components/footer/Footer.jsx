import styles from './Footer.module.css'



function Footer() {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.logo}>Lamadev</div>
                <div className={styles.text}>
                    Lama creative thoughts agency All Right Reserved
                </div>
            </div>
        </>
    )
}


export default Footer