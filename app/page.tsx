"use client"

import { useRef } from "react";

import { useVoucher } from "@/hooks/use-voucher"

import {
  ImageUpload,
  OrganizationForm,
  VoucherForm
} from "@/components/form"

import { Separator } from "@/components/ui/separator"

import { VoucherPreview } from "@/components/voucher"

import { ExportButton } from "@/components/export-button"

import { PDFVoucher } from "@/components/pdf/pdf-voucher"



export default function Home() {


  const voucher =
    useVoucher();


  const pdfRef =
    useRef<HTMLDivElement>(null);



  return (

    <main className="grid h-screen grid-cols-5">


      {/* LEFT */}

      <aside
        className="
        col-span-2
        overflow-y-auto
        border-r
        p-6
        "
      >


        <h1 className="text-2xl font-bold">
          Voucher Generator
        </h1>


        <div className="space-y-6 mt-6">


          <OrganizationForm

            organization={
              voucher.voucher.organization
            }

            updateOrganization={
              voucher.updateOrganization
            }

          />


          <Separator />


          <VoucherForm

            voucher={
              voucher.voucher
            }

            updateVoucher={
              voucher.updateVoucher
            }

          />


          <Separator />


          <ImageUpload

            images={
              voucher.voucher.images
            }

            addImages={
              voucher.addImages
            }

            removeImage={
              voucher.removeImage
            }

          />


          <ExportButton
            pdfRef={pdfRef}
          />


        </div>


      </aside>



      {/* PREVIEW */}

      <section
        className="
        col-span-3
        overflow-y-auto
        bg-muted
        p-10
        "
      >

        <VoucherPreview
          voucher={
            voucher.voucher
          }
        />


      </section>



      {/* PDF ONLY */}

      <div className="hidden">

        <PDFVoucher
          ref={pdfRef}
          voucher={
            voucher.voucher
          }
        />

      </div>


    </main>

  )
}
