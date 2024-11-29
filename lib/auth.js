import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaClient} from '@prisma/client'
import bcrypt from "bcryptjs";
import {authConfig} from "./auth.config";
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
        if (!isPasswordCorrect) {
            throw new Error('Wrong credentials')
        }
        return user
    }catch (err){
        console.log(err)
        throw err
    }
}

export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID ,
            clientSecret: process.env.GITHUB_SECRET ,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    console.log('=============== Helloooooo ============')
                    const user = await login(credentials)
                    console.log('=============== After Login func ===========')
                    return user
                } catch (err) {
                    console.log('oooooooooooooooo - im in the catch - oooooooooo')
                    throw err
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile}) {
            console.log('user :: ', user, 'account : ', account, 'profile : ', profile)
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
            console.log('Im in the fucking callback ================================')
            // if (account.provider === 'credentials') {
            //     return false
            // }
            return true
        },
        ...authConfig.callbacks,
    }
})