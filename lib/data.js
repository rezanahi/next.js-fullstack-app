import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const getPosts = async () => {
    try {
        const posts = await prisma.posts.findMany()
        return posts
    } catch (err) {
        console.log(err)
        throw new Error("Faild to fetch posts")
    }
}

export const getPost = async (slug) => {
    try {
        const post = await prisma.posts.findUnique({
            where: {slug: slug,},
        })
        return post
    } catch (err) {
        console.error(err)
        throw new Error("Faild to fetch post")
    }
}

export const getUser = async (id) => {
    try {
        const user = await prisma.users.findUnique({
            where: {id: id,},
        })
        return user
    } catch (err) {
        console.error(err)
        throw new Error("Faild to fetch user")
    }
}


// export const getUser = async (id) => {
//     try {
//         await connectToDb()
//         const user = await User.findById(id)
//         return user
//     } catch (err) {
//         console.log(err)
//         throw new Error('Failed to fetch user')
//     }
// }

// export const getAllUsers = async () => {
//     try {
//         await connectToDb()
//         const allUsers = await User.find()
//         return allUsers
//     } catch (err) {
//         console.log(err)
//         throw new Error('Faild to fetch all users')
//     }
// }