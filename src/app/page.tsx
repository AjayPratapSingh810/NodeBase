import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <>
      <div className="text-red-500">Welcome to the Home Page</div>
      <div className="text-black-500">{JSON.stringify(users)}</div>
    </>
  );
};

export default Page;
