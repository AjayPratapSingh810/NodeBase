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

import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());
  return (
    <>
      <div className="text-red-500">Welcome to the Home Page</div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default Page;
