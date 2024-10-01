import * as React from "react"

import { auth as getServerSession } from "@/auth"

import Chat from "@/app/components/Chat"
import { Separator } from "@/components/ui/separator"
import PreviousChats from "./components/PreviousChats"

export default async function HomeRoute() {
  const session = await getServerSession()

  return (
    <main>
      <h1 className="text-4xl font-bold">Welcome to GPT Chat</h1>
      {!session?.user?.email && (
        <div className="text-xl my-5">Please sign in to use the chat</div>
      )}
      {session?.user?.email && (
        <>
          <React.Suspense
            fallback={<h4 className="text-2xl font-bold">Loading Chats...</h4>}
          >
            <PreviousChats />
          </React.Suspense>
          <h4 className="text-2xl font-bold mt-5">New Chat Session</h4>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  )
}
