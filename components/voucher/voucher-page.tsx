import { Voucher } from "@/types/voucher"

import { LetterHead, VoucherDetails, ScreenshotGrid, Footer } from "./"

interface Props {
  voucher: Voucher

  images: Voucher["images"]

  firstPage?: boolean
}

export function VoucherPage({ voucher, images, firstPage = false }: Props) {
  return (
    <div
      className="voucher-page"
      style={{
        width: "794px",
        height: "1123px",
        padding: "40px",
        background: "#ffffff",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <LetterHead organization={voucher.organization} />

      {firstPage && <VoucherDetails voucher={voucher} />}

      <div className="flex-1">
        <ScreenshotGrid images={images} />
      </div>

      <Footer />
    </div>
  )
}
