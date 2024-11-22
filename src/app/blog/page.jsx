import '@/components/postCard/PostCard'
import PostCard from "@/components/postCard/PostCard";
import styles from './blog.module.css'

import {getPosts} from '../../../lib/data'

export const metadata = {
    title: "Blog",
    description: "Blog Blog Blog",
};

async function Blog () {
    const posts = await getPosts()

    return (
        <>
            <div className={styles.container}>
                {
                    posts.map((post) => {
                        return (
                            <div className={styles.post} key={post.id}>
                                <PostCard postData={post}></PostCard>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Blog