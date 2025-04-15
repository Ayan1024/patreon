import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page if needed
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the homepage after login
      if (url.startsWith(baseUrl)) {
        return baseUrl; // Or you can use `/home` or any other path
      }
      return url;
    },
  },
});

export { handler as GET, handler as POST };
// This file handles the authentication routes for NextAuth.js.