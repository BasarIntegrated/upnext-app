import authConfig from "@/config/auth.config";
import NextAuth from "next-auth";

export const { auth, handlers, signOut, signIn } = NextAuth(authConfig);
