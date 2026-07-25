"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Voucher } from "@/types/voucher"

interface Props {
  voucher: Voucher

  updateVoucher: <K extends keyof Voucher>(key: K, value: Voucher[K]) => void
}

export function VoucherForm({ voucher, updateVoucher }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Voucher Details</h2>

      <div className="space-y-2">
        <Label>Date</Label>

        <Input
          type="date"
          value={voucher.date}
          onChange={(e) => updateVoucher("date", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Amount</Label>

        <Input
          type="number"
          value={voucher.amount}
          onChange={(e) => updateVoucher("amount", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Description</Label>

        <Textarea
          rows={3}
          value={voucher.description}
          onChange={(e) => updateVoucher("description", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Remark</Label>

        <Textarea
          rows={3}
          value={voucher.remark}
          onChange={(e) => updateVoucher("remark", e.target.value)}
        />
      </div>
    </div>
  )
}
