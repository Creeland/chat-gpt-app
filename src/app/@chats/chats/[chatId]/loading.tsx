import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function Loading() {
  return (
    <div className="md:w-1/3 md:min-w-1/3 pr-5 w-full text-nowrap">
      <div className="text-2xl font-bold">Loading...</div>
      <Separator className="my-3" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  )
}
