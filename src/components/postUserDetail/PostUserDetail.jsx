import styles from './PostUserDetail.module.css'
import Image from "next/image";

import {getUser} from '../../../lib/data'

async function PostUserDetail({authorId}) {
    const author = await getUser(authorId)

    return(
        <>
            <div className={styles.avatarWrapper}>
                <Image src={'/post3.jpg'} alt='' className={styles.avatar} fill/>
            </div>
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Author</span>
                <span className={styles.detailValue}>{author.username}</span>
            </div>
        </>
    )
}


export default PostUserDetail