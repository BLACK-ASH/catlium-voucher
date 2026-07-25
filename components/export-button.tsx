"use client";

import { Button } from "@/components/ui/button";
import { usePDF } from "react-to-pdf";


interface Props {
  pdfRef: React.RefObject<HTMLDivElement | null>;
}


export function ExportButton({
  pdfRef
}: Props) {


  const { toPDF } = usePDF({
    filename: "voucher.pdf",

    page: {
      margin: 0,
      format: "A4",
      orientation: "portrait",
    },

    canvas: {
      mimeType: "image/png",
      qualityRatio: 1,
    },
  });


  return (
    <Button
      onClick={() =>
        toPDF(pdfRef.current ?? undefined)
      }
    >
      Export PDF
    </Button>
  );
}
