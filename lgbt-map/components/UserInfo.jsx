"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


export default function UserInfo() {
    const { data: session } = useSession();
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${session?.user?.id}`);
    };

        return (
        <div className="shadow-xl w-200 p-8 rounded-md content-center bg-green-200">
            <Image
            className="rounded-full"
            src={session?.user?.image}
            width={60}
                    height={60}
                    alt=""
            />
            <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
            </div>
            <button onClick = {handleClick}>
                Welcome! Click here to go to map
            </button>
        </div>
        );
}
