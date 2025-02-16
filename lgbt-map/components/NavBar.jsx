"use client";

import Link from "next/link";
import { Button } from 'lucide-react';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { status } = useSession();
    return (
        <nav className="p-4 flex justify-between items-center shadow-md bg-white">
            <Link className="font-bold text-lg text-blue-700" href={"/"}>
                LGBT MAP
            </Link>
            <div className="flex items-center space-x-4">
                <Link className="text-gray-700 hover:text-green-700" href={"/about"}>
                    About
                </Link>
                <Link className="text-gray-700 hover:text-green-700" href={"/contact"}>
                    Contact
                </Link>
                {status === "authenticated" ? (
                    <Button
                        onClick={() => signOut()}
                        className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-xl shadow-card transition duration-300 ease-in-out"
                    >
                        Sign Out
                    </Button>
                ) : (
                    <button
                        onClick={() => signIn("google")}
                        className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-xl shadow-card transition duration-300 ease-in-out"
                    >
                        Sign In
                    </button>
                )}
            </div>
        </nav>
    );
}
