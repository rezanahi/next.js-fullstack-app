'use server'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()


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


