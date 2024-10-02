import './blog.module.css'
import '@/components/postCard/PostCard'
import PostCard from "@/components/postCard/PostCard";
import styles from './blog.module.css'

function Blog () {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.post}>
                    <PostCard></PostCard>
                </div>
                <div className={styles.post}>
                    <PostCard></PostCard>
                </div>
                <div className={styles.post}>
                    <PostCard></PostCard>
                </div>
                <div className={styles.post}>
                    <PostCard></PostCard>
                </div>
            </div>
        </>
    )
}


export default Blog