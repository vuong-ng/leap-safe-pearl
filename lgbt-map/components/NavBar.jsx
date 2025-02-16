"use client";

import Link from "next/link";
import { Button } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  // const { status } = useSession();
  const { data: session, status } = useSession();

  return (
    <div className="navbar-container">
      <nav className="relative p-4 flex justify-between items-center shadow-md bg-green-300 w-full">
        <Link className="font-bold text-lg text-green-700" href={"/"}>
          LEAPSAFE
        </Link>
        <div className="flex items-center space-x-4">
          <Link className="text-gray-700 hover:text-green-700" href={"/about"}>
            About
          </Link>
          <Link className="text-gray-700 hover:text-blue-700" href={"/contact"}>
            Contact
          </Link>
          {status === "authenticated" ? (
            <>
              <span className="text-gray-700 font-bold">
                {session.user.name}
              </span>
              <Link href={`/app/${session.user.id}`}>
                <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-xl shadow-card transition duration-300 ease-in-out">
                  Go to Map Home
                </button>
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-xl shadow-card transition duration-300 ease-in-out"
              >
                Sign Out
              </button>
            </>
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
    </div>
  );
}
//     return (
//         <>
//         <nav className="p-4 flex justify-between items-center shadow-md bg-white">
//             <Link className="font-bold text-lg text-blue-700" href={"/"}>
//                 LGBT MAP
//             </Link>
//             <div className="flex items-center space-x-4">
//                 <Link className="text-gray-700 hover:text-green-700" href={"/about"}>
//                     About
//                 </Link>
//                 <Link className="text-gray-700 hover:text-blue-700" href={"/contact"}>
//                     Contact
//                 </Link>
//                 {status === "authenticated" ? (
//                     <button
//                         onClick={() => signOut()}
//                         className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-xl shadow-card transition duration-300 ease-in-out"
//                     >
//                         Sign Out
//                     </button>
//                     // <form action={ async () => {
//                     //     "use server"
//                     //     await signOut({redirectTo:"/"})
//                     // }}>
//                     //     <button
//                     //         className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-xl shadow-card transition duration-300 ease-in-out"
//                     //         type='submit'>Log out</button>
//                     // </form>
//                 ) : (
//                     <button
//                         onClick={() => signIn("google")}
//                         className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-xl shadow-card transition duration-300 ease-in-out"
//                     >
//                         Sign In
//                     </button>
//                 )}
//             </div>
//             </nav>
//             </>
//     );
// }
