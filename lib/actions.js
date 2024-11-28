'use server'
import {PrismaClient} from '@prisma/client'
import {signIn, signOut} from "./auth";
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs'


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
export const register = async (formData) => {
    const {username, email, password, password2} = Object.fromEntries(formData)
    if (password !== password2) {
        return 'Password must match!'
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
    } else {
        return "username already exists!"
    }
}

export const login = async (formData) => {
    const {username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", {username, password})
    } catch (err) {
        console.error(err)
    }
}


