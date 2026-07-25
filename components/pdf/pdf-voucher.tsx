"use client";

import { forwardRef } from "react";
import { Voucher } from "@/types/voucher";

import { VoucherPage } from "@/components/voucher/voucher-page";


interface Props {
  voucher: Voucher;
}


export const PDFVoucher = forwardRef<
  HTMLDivElement,
  Props
>(
  function PDFVoucher(
    { voucher },
    ref
  ) {

    const pages = [];

    for (
      let i = 0;
      i < voucher.images.length;
      i += 4
    ) {
      pages.push(
        voucher.images.slice(i, i + 4)
      );
    }


    if (pages.length === 0) {
      pages.push([]);
    }


    return (

      <div
        ref={ref}
        style={{
          background: "#ffffff",
          color: "#000000",
        }}
      >

        {
          pages.map(
            (page, index) => (

              <VoucherPage

                key={index}

                voucher={voucher}

                images={page}

                firstPage={
                  index === 0
                }

              />

            )
          )
        }

      </div>

    );
  }
);
