import * as React from "react"

import { auth as getServerSession } from "@/auth"

import Chat from "@/app/components/Chat"
import { Separator } from "@/components/ui/separator"

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
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  )
}
