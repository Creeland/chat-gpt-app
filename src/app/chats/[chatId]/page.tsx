import { notFound, redirect } from "next/navigation"
import { auth } from "@/auth"

import Chat from "@/app/components/Chat"
import { getChat } from "@/db"

export const dynamic = "force-dynamic"

export default async function ChatDetail({
  params: { chatId },
}: {
  params: { chatId: string }
}) {
  const chat = await getChat(+chatId)

  if (!chat) {
    return notFound()
  }

  const session = await auth()
  if (!session || chat?.user_email !== session.user?.email) {
    redirect("/")
  }

  return (
    <main className="pt-5">
      <Chat id={+chatId} key={+chatId} messages={chat?.messages || []} />
    </main>
  )
}
