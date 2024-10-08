import '@/components/postCard/PostCard'
import PostCard from "@/components/postCard/PostCard";
import styles from './blog.module.css'

async function Blog () {
    const posts = (await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    }))
    const postsData = await posts.json();
    // console.log(postsData[1])

    return (
        <>
            <div className={styles.container}>
                {
                    postsData.map((pD) => {
                        return (
                            <div className={styles.post} key={pD.id}>
                                <PostCard postData={pD}></PostCard>
                            </div>
                        )
                    })
                }
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