"use client";
import { Button, TextAnimation } from "../components";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export const Header = () => {
  const { userId } = useAuth();
  return (
    <header>
      <div className="flex container items-center justify-between pt-10 max-sm:pt-5  z-50 fixed top-0 left-0 right-0">
        <span>
          <img src="icon/logo.svg" alt="logo" className="w-[162px]" />
        </span>
        <nav className="flex items-center gap-x-4">
          {!userId ? (
            <Link href={"/sign-in"}>
              <Button className="bg-primary-100 text-lg text-white py-2 px-5 rounded-full  max-sm:text-xs">
                <TextAnimation text={"Sign In"} />
              </Button>
            </Link>
          ) : (
            <Button className="bg-primary-100 text-lg text-white py-2 px-5 rounded-lg  max-sm:text-xs">
              <TextAnimation text={" Explore Your Insights"} />
            </Button>
          )}
          {/* <Button className=" text-white py-3 px-10 rounded-full bg-primary-200 buttonBorder">
            <p>Sign in</p>
          </Button> */}
        </nav>
      </div>
    </header>
  );
};
