import { UserProfile } from "@clerk/nextjs";
import { SideBar, Main } from "./index";
const Page = () => {
  return (
    <section className="bg-black h-screen flex">
      <SideBar />
      <Main />
    </section>
  );
};

export default Page;
