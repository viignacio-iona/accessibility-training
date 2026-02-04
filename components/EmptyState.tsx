import Link from "next/link"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  title?: string
  message?: string
  actionLabel?: string
  actionHref?: string
}

export default function EmptyState({
  title = "Nothing here",
  message = "There are no items to display.",
  actionLabel = "Browse Products",
  actionHref = "/products",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-2xl font-semibold mb-2">{title}</div>
      <p className="text-gray-600 mb-6 text-center max-w-md">{message}</p>
      {actionHref && (
        <Link href={actionHref}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </div>
  )
}
