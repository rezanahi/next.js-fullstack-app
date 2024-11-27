import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID ,
            clientSecret: process.env.GITHUB_SECRET ,
        }),
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