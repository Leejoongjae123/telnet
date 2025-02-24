import Link from "next/link";
import DeployButton from "@/components/deploy-button";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col gap-12 items-center justify-start">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            
            
          </div>
          <HeaderAuth></HeaderAuth>
        </div>
      </nav>
      {children}
    </div>
  );
}
