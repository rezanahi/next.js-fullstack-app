'use server'
import {PrismaClient} from '@prisma/client'
import {signIn, signOut} from "./auth";
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'


export async function AddPost (formData) {
    const title = formData.get('todo-name')
    const slug = formData.get('todo-slug')
    try {
        const newPost = await prisma.posts.create({
            data: {
                title: title,
                description: '---',
                slug: slug,
                authorId: 1,
            },
        })
    } catch (err) {
        console.log(err)
    }
}
export const handleGithubLogin = async () => {
    await signIn("github")
}
export const handleGithubLogout = async () => {
    await signOut()
}
export const register = async (previousState, formData) => {
    const {username, email, password, password2} = Object.fromEntries(formData)
    if (password !== password2) {
        return {error: 'Password must match!'}
    }

    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    })
    console.log('user = ', user)
    if(!user) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await prisma.users.create({
            data: {
                email: email,
                username: username,
                password: hashedPassword
            }
        })
        return {success: true}
    } else {
        return {error : "username already exists!"}
    }
}

export const login = async (previousState, formData) => {
    const {username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", {username, password})
        console.log('After signIn ==============****************************')
        // redirect('blog', 'push')
        return {success: true}
    } catch (err) {
        console.log('errororororor = ', err.message)
        if (!err.message.includes('NEXT_REDIRECT')){
            return {error: 'Wrong username or password!'}
        }
        if (err.message.includes('NEXT_REDIRECT')){
            return {success: true}
        }
    }
}


