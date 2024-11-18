import styles from './singlePost.module.css'
import Image from "next/image";

import PostUserDetail from "@/components/postUserDetail/PostUserDetail";

import {getPost} from "../../../../lib/data";

async function Post ({params}) {
    const {slug} = await params
    const post = await getPost(slug)

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image src={'/post2.jpg'} alt='' className={styles.img} fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.detail}>
                        <PostUserDetail authorId={post.authorId}></PostUserDetail>
                        <div className={styles.detailText}>
                            <span className={styles.detailTitle}>Published</span>
                            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 15)}</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {post.description}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post