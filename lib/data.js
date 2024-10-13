import {Post} from './models'
import {User} from './models'
import {connectToDb} from './utils'

export const getPosts = async () => {
    try {
        await connectToDb()
        const posts = await Post.find()
        return posts
    } catch (err) {
        console.log(err);
        throw new Error("Faild to fetch posts")
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.findOne({slug: slug})
        return post
    } catch (err) {
        console.log( err)
        throw new Error('Failed to fetch post')
    }
}


export const getUser = async (id) => {
    try {
        await connectToDb()
        const user = await User.findById(id)
        return user
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch user')
    }
}

export const getAllUsers = async () => {
    try {
        await connectToDb()
        const allUsers = await User.find()
        return allUsers
    } catch (err) {
        console.log(err)
        throw new Error('Faild to fetch all users')
    }
}