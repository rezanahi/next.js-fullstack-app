import styles from './PostUserDetail.module.css'
import Image from "next/image";

function PostUserDetail() {


    return(
        <>
            <div className={styles.avatarWrapper}>
                <Image src={'/post3.jpg'} alt='' className={styles.avatar} fill/>
            </div>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>Terry Jefferson</span>
            </div>
        </>
    )
}


export default PostUserDetail