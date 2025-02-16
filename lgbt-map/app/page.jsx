import react from "react";
import UserInfo from "@/components/UserInfo";
import SignInModal from "@/components/SignInModal";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-pink-100 flex h-screen -mt-24">
      <SignInModal/>
    </div>
  );
}