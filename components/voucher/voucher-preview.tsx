"use client";

import { forwardRef } from "react";

import { Voucher } from "@/types/voucher";

import { VoucherPage } from "./voucher-page";


interface Props {
  voucher: Voucher;
}


export const VoucherPreview = forwardRef<
  HTMLDivElement,
  Props
>(
  function VoucherPreview(
    {
      voucher
    },
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
        id="voucher-preview"
        className="space-y-10"
      >

        {
          pages.map(
            (page, index) => (

              <VoucherPage

                key={index}

                voucher={
                  voucher
                }

                images={
                  page
                }

                firstPage={
                  index === 0
                }

              />

            )
          )
        }


      </div>

    )

  }
);
