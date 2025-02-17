import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize(
        credentials: Record<"username" | "password", string> | undefined,
        req
      ) {
        const user = { id: 1, name: "admin", email: "admin@example.com" };
        const validUserName = "admin";
        const validPassword = "password";

        if (
          validPassword === credentials?.password &&
          validUserName === credentials?.username
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
    async session(session, token) {
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
