import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
        if (account.provider === "google") {
            const { name, email } = user;
            try {
            await connectMongoDB();
            const userExists = await User.findOne({ email });

            if (!userExists) {
                const res = await fetch("http://localhost:3000/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                }),
                });

                if (res.ok) {
                return user;
                }
            }
            } catch (error) {
            console.log(error);
            }
        }

        return user;
        },
        async redirect({ url, baseUrl, account }) {
            if (account?.provideAccountId) {
                return `${baseUrl}/app/${account.provideAccountId}`;
            }
            return baseUrl;
        },
        async session({ session, token, user }) {
            session.user.id = token.sub;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (account) {
                token.sub = account.provideAccountId;
            }
            return token;
        }
    },
    };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
