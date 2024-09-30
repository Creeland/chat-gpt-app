import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { type CallbacksOptions } from "next-auth"
const handler = NextAuth({
  callbacks: {
    async signIn({ profile }: { profile: { login: string } }) {
      return profile.login === "Creeland"
    },
  } as unknown as CallbacksOptions,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
})

export { handler as GET, handler as POST }
