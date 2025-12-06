'use client'
import { Button } from "@/components/ui/button";
import authClient from "@/lib/auth-client";
// import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
// import { caller } from "@/trpc/server";
import { useMutation } from "@tanstack/react-query";
// import { caller } from "@/trpc/server";

// const Page = async () => {
//   const users = await caller.getUsers();
//   return (
//     <>
//       <div className="text-red-500">Welcome to the Home Page</div>
//       <div className="text-black-500">{JSON.stringify(users)}</div>
//     </>
//   );
// };

// export default Page;

// "use client"

// import { useTRPC } from "@/trpc/client";
// import { useQuery } from "@tanstack/react-query";

// const Page = () => {
//   const trpc = useTRPC();
//   const {data: users} = useQuery(trpc.getUsers.queryOptions());
//   return (
//     <>
//       <div className="text-red-500">Welcome to the Home Page</div>
//       <div className="text-black-500">{JSON.stringify(users)}</div>
//     </>
//   );
// };

// export default Page;

const Page = () => {
  // await requireAuth();
  // const users = await caller.getUsers();
  const trpc = useTRPC();
  const testAi = useMutation(trpc.testAi.mutationOptions());
  return (
    <>
      {/* {JSON.stringify(users)} */}
      {/* <Button onClick={() => authClient.signOut()}>Sign Out</Button> */}
      <Button disabled={testAi.isPending} onClick={() => testAi.mutate()}>
        Test Ai
      </Button>
    </>
  );
};

export default Page;
