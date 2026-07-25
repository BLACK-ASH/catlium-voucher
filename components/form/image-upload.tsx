"use client"

import Image from "next/image"

import { Button } from "@/components/ui/button"

import { VoucherImage } from "@/types/voucher"

interface Props {
  images: VoucherImage[]

  addImages: (files: FileList | File[]) => void

  removeImage: (id: string) => void
}

export function ImageUpload({ images, addImages, removeImage }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Transaction Proofs</h2>

      <input
        multiple
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files) {
            addImages(e.target.files)
          }
        }}
      />

      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div key={image.id} className="overflow-hidden rounded-lg border">
            <div className="relative aspect-[9/16]">
              <Image src={image.preview} alt="" fill className="object-cover" />
            </div>

            <div className="flex items-center justify-between p-2">
              <span className="text-xs">#{index + 1}</span>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeImage(image.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
