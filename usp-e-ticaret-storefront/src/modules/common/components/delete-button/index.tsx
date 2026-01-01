"use client"

import { deleteLineItem } from "@lib/data/cart"
import { Spinner, Trash } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import { useState } from "react"

type DeleteButtonProps = {
  id: string
  children?: React.ReactNode
  className?: string
}

const DeleteButton = ({ id, children, className }: DeleteButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (isDeleting) return

    try {
      setIsDeleting(true)
      await deleteLineItem(id)
      router.refresh() // 🔥 Server cart yeniden render edilir
    } catch (error) {
      console.error("Ürün silinemedi:", error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      aria-label="Ürünü sepetten kaldır"
      className={clx(
        "flex items-center gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base transition disabled:opacity-50",
        className
      )}
    >
      {isDeleting ? <Spinner className="animate-spin" /> : <Trash />}
      {children && <span>{children}</span>}
    </button>
  )
}

export default DeleteButton
