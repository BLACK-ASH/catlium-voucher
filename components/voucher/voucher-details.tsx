import { Voucher } from "@/types/voucher"

interface Props {
  voucher: Voucher
}

export function VoucherDetails({ voucher }: Props) {
  return (
    <div className="mb-5 rounded-md border">
      <table className="w-full text-sm">
        <tbody>
          <tr>
            <td className="p-2 font-semibold">Date</td>

            <td className="p-2">{voucher.date || "-"}</td>
          </tr>

          <tr>
            <td className="p-2 font-semibold">Amount</td>

            <td className="p-2">₹ {voucher.amount || "0"}</td>
          </tr>

          {voucher.description && (
            <tr>
              <td className="p-2 font-semibold">Description</td>

              <td className="p-2">{voucher.description}</td>
            </tr>
          )}

          {voucher.remark && (
            <tr>
              <td className="p-2 font-semibold">Remark</td>

              <td className="p-2">{voucher.remark}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
