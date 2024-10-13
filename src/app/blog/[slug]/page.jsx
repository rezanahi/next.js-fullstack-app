'use client'
import styles from './singlePost.module.css'
import Image from "next/image";
import { useSearchParams } from 'next/navigation'

import PostUserDetail from "@/components/postUserDetail/PostUserDetail";

import {getPost} from "../../../../lib/data";
import {useEffect, useState} from "react";

function Post () {
    const searchParams = useSearchParams()
    const slug = searchParams.get('slug')
    const [post, setPost] = useState();

    useEffect(() => {
        getPost(slug).then(res => {
            setPost(res)
        })
    }, [slug]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={'/post2.jpg'} alt='' className={styles.img} fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post}</h1>
                    <div className={styles.detail}>
                        <PostUserDetail></PostUserDetail>
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Published</span>
                            <span className={styles.detailValue}>01.01.2024</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        body
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post