import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export async function exportPDF(element: HTMLElement) {
  const pages = element.querySelectorAll(".voucher-page")

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  for (let i = 0; i < pages.length; i++) {
    const original = pages[i] as HTMLElement

    const clone = original.cloneNode(true) as HTMLElement

    /*
      Create isolated export container
    */

    const wrapper = document.createElement("div")

    wrapper.style.position = "absolute"

    wrapper.style.left = "-10000px"

    wrapper.style.top = "0"

    wrapper.style.width = "794px"

    wrapper.style.height = "1123px"

    wrapper.style.background = "#ffffff"

    wrapper.style.color = "#000000"

    clone.style.width = "794px"

    clone.style.height = "1123px"

    clone.style.background = "#ffffff"

    clone.style.color = "#000000"

    /*
      Remove all Tailwind classes
      because they may contain oklch/lab colors
    */

    clone.querySelectorAll("*").forEach((node) => {
      const el = node as HTMLElement

      el.removeAttribute("class")

      el.style.color = "#000000"

      el.style.background = "#ffffff"

      el.style.borderColor = "#cccccc"

      el.style.boxShadow = "none"
    })

    wrapper.appendChild(clone)

    document.body.appendChild(wrapper)

    const canvas = await html2canvas(clone, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
    })

    document.body.removeChild(wrapper)

    const img = canvas.toDataURL("image/png")

    if (i > 0) {
      pdf.addPage()
    }

    pdf.addImage(img, "PNG", 0, 0, 210, 297)
  }

  pdf.save("voucher.pdf")
}
