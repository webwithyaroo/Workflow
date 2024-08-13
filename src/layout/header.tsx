"use client";

import { Button, TextAnimation } from "../components";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { userId } = useAuth();
  const pathName = usePathname();
  const isOnDashboard = pathName.startsWith("/dashboard");

  return (
    <header>
      <div className="flex container items-center justify-between pt-10 max-sm:pt-5 z-50 fixed top-0 left-0 right-0">
        {!isOnDashboard && (
          <span>
            <img src="icon/logo.svg" alt="logo" className="max-w-fit h-10" />
          </span>
        )}

        <nav className="flex items-center gap-x-4">
          {!userId ? (
            <Link href="/sign-in">
              <Button className="bg-primary-100 text-white py-1 px-6 rounded-[1px] max-sm:text-xs ring-1 ring-primary-150">
                <TextAnimation text="Sign In" />
              </Button>
            </Link>
          ) : (
            !isOnDashboard && (
              <Link href="/dashboard">
                <Button className="bg-primary-100 text-white py-1 px-6 rounded-[1px] max-sm:text-xs ring-1 ring-primary-150">
                  <TextAnimation text="Welcome   Back" />
                </Button>
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};
