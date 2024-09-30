"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useSession, signIn, signOut } from "next-auth/react"

function getFirstTwoCapitalLetters(name: string) {
  const match = (name || "").match(/[A-Z]/g)
  return match ? match.slice(0, 2).join("") : "GT"
}

export default function UserButton() {
  const { data: session, status } = useSession()
  return (
    <div>
      {status === "authenticated" && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={session?.user?.image ?? ""} />
              <AvatarFallback>
                {getFirstTwoCapitalLetters(session?.user?.name ?? "")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => signOut()}>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {status === "unauthenticated" && (
        <Button onClick={() => signIn()}>Sign in</Button>
      )}
    </div>
  )
}
