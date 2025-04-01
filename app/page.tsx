"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to NextAuth App</h1>
      {session ? (
        <>
          <p className="mt-4">Signed in as {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="mt-4 px-4 py-2 bg-red-400 hover:bg-red-500 cursor-pointer text-white rounded"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer"
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
}
