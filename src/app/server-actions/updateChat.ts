"use server"
import { auth as getServerSession } from "@/auth"
import { Message } from "@/types"
import { createChat, updateChat as updateChatMessages } from "@/db"

export const updateChat = async (
  chatId: number | null,
  messages: Message[]
) => {
  const session = await getServerSession()
  if (!chatId) {
    return await createChat(
      session?.user?.email ?? "",
      messages[0].content,
      messages
    )
  } else {
    await updateChatMessages(chatId, messages)
    return chatId
  }
}
