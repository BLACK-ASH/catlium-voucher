"use client"

import { useState } from "react"
import { Voucher, VoucherImage } from "@/types/voucher"

const initialVoucher: Voucher = {
  organization: {
    name: "",
    address: "",
    phone: "",
    email: "",
    logo: null,
  },

  date: "",

  amount: "",

  description: "",

  remark: "",

  images: [],
}

export function useVoucher() {
  const [voucher, setVoucher] = useState<Voucher>(initialVoucher)

  const updateVoucher = <K extends keyof Voucher>(
    key: K,
    value: Voucher[K]
  ) => {
    setVoucher((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const updateOrganization = (
    key: keyof Voucher["organization"],
    value: string | File | null
  ) => {
    setVoucher((prev) => ({
      ...prev,
      organization: {
        ...prev.organization,
        [key]: value,
      },
    }))
  }

  const addImages = (files: FileList | File[]) => {
    const uploaded: VoucherImage[] = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
    }))

    setVoucher((prev) => ({
      ...prev,
      images: [...prev.images, ...uploaded],
    }))
  }

  const removeImage = (id: string) => {
    setVoucher((prev) => {
      const image = prev.images.find((img) => img.id === id)

      if (image) {
        URL.revokeObjectURL(image.preview)
      }

      return {
        ...prev,
        images: prev.images.filter((img) => img.id !== id),
      }
    })
  }

  const moveImage = (from: number, to: number) => {
    setVoucher((prev) => {
      const images = [...prev.images]

      const [removed] = images.splice(from, 1)

      images.splice(to, 0, removed)

      return {
        ...prev,
        images,
      }
    })
  }

  return {
    voucher,

    updateVoucher,

    updateOrganization,

    addImages,

    removeImage,

    moveImage,
  }
}
