import React from 'react';
import styles from './PostCard.module.css'
import Image from "next/image";
import Link from "next/link";

function PostCard({postData}) {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.imgContainer}>
                        <Image unoptimized src={postData.image ? postData.image : '/post1.jpg'} alt='' fill className={styles.img}/>
                    </div>
                    <span className={styles.date}>01.01.2024</span>
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.title}>{postData.title}</h1>
                    <p className={styles.desc}>{postData.description}</p>
                    <Link className={styles.link} href={`/blog/${postData.slug}`}>Read More</Link>
                </div>
            </div>
        </>
    )
}


export default PostCard;