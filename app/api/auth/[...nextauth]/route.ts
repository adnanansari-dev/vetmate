import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 100 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = token.role || "livestock_keeper"
      }
      if (trigger === "update" && session) {
        if (session.role) token.role = session.role
        if (session.dob) token.dob = session.dob
        if (session.name) token.name = session.name
        if (session.image) token.image = session.image
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role as string
        session.user.dob = token.dob as string
      }
      return session
    },
  },
})

export const { GET, POST } = handlers