import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div className="bg-primary-300  h-screen w-full flex items-center justify-center">
      <div className="w-fit shadow-2xl shadow-zinc-900">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
