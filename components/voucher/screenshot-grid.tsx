import Image from "next/image"

import { VoucherImage } from "@/types/voucher"

interface Props {
  images: VoucherImage[]
}

export function ScreenshotGrid({ images }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative h-[220px] overflow-hidden rounded-md border"
        >
          <Image
            src={image.preview}
            alt="proof"
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}
