import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { privateEnv } from "~/lib/env";

const env = privateEnv();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;
        const { password } = credentials;
        if (password === env.PASSWORD) {
          return {};
        } else {
          return null;
        }
      },
    }),
  ],
});
