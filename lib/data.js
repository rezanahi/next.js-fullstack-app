import {Post} from './models'
import {User} from './models'
import {connectToDb} from './utils'

export const getPosts = async () => {
    try {
        console.log('ghabl as connect')
        connectToDb()
        console.log('as connect db rad shod')
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
        const post = await Post.find({slug: slug})
        return post
    } catch (err) {
        console.log( err)
        throw new Error('Failed to fetch post')
    }
}


export const getUser = async (id) => {
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch user')
    }
}

export const getAllUsers = async () => {
    try {
        connectToDb()
        const allUsers = await User.find()
        return allUsers
    } catch (err) {
        console.log(err)
        throw new Error('Faild to fetch all users')
    }
}