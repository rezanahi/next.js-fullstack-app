import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaClient} from '@prisma/client'
import bcrypt from "bcryptjs";
const prisma = new PrismaClient()

const login = async (credentials) => {
    try {
        const user = await prisma.users.findFirst({
            where: {username: credentials.username},
        })
        console.log("user = ", user)
        if (!user) {
            throw new Error('Wrong credentials')
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        console.log('isPasswordCorrect = ', isPasswordCorrect)
        if (!isPasswordCorrect) {
            throw new Error('Wrong credentials')
        }
        return user
    }catch (err){
        console.log(err)
        throw new Error("Failed to login")
    }
}

export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID ,
            clientSecret: process.env.GITHUB_SECRET ,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    return await login(credentials)
                } catch (err) {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            console.log('user : ', user, 'account : ', account, 'profile : ', profile)
            if(account.provider === 'github') {
                const user = await prisma.users.findUnique({
                    where: {email: profile.email},
                })
                console.log('user = ', user)
                if(!user) {
                    const newUser = await prisma.users.create({
                        data: {
                            email: profile.email,
                            username: profile.login,
                        }
                    })
                }
            }
            return true
        }
    }
})