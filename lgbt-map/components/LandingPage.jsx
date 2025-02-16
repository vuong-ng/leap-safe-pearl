"use client";

import react from "react";
import UserInfo from "@/components/UserInfo";
import SignInModal from "@/components/SignInModal";
import { useSession } from "next-auth/react";

export default function LandingPage() {
    const { status} = useSession();

    if (status === "authenticated") {
        return <UserInfo />;
    } else {
        return <SignInModal />;
    }
}
