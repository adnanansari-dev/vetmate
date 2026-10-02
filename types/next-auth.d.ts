import { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Extends the built-in Session user model
   */
  interface Session {
    user: {
      role?: string
      dob?: string
    } & DefaultSession["user"]
  }

  /**
   * Extends the built-in User model
   */
  interface User {
    role?: string
    dob?: string
  }
}

declare module "next-auth/jwt" {
  /**
   * Extends the built-in JWT model
   */
  interface JWT {
    role?: string
    dob?: string
  }
}