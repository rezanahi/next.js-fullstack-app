import styles from './singlePost.module.css'
import Image from "next/image";

import PostUserDetail from "@/components/postUserDetail/PostUserDetail";

function Post () {


    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={'/post2.jpg'} alt='' className={styles.img} fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Title</h1>
                    <div className={styles.detail}>
                        <PostUserDetail></PostUserDetail>
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Published</span>
                            <span className={styles.detailValue}>01.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        lotrem lorem lorem lorem
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post