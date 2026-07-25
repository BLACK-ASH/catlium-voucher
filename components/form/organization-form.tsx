"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Voucher } from "@/types/voucher"

interface Props {
  organization: Voucher["organization"]
  updateOrganization: (
    key: keyof Voucher["organization"],
    value: string | File | null
  ) => void
}

export function OrganizationForm({ organization, updateOrganization }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Organization</h2>

      <div className="space-y-2">
        <Label>Logo</Label>

        <Input
          type="file"
          accept="image/*"
          onChange={(e) =>
            updateOrganization("logo", e.target.files?.[0] ?? null)
          }
        />
      </div>

      <div className="space-y-2">
        <Label>Name</Label>

        <Input
          value={organization.name}
          onChange={(e) => updateOrganization("name", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Address</Label>

        <Input
          value={organization.address}
          onChange={(e) => updateOrganization("address", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Phone</Label>

        <Input
          value={organization.phone}
          onChange={(e) => updateOrganization("phone", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>

        <Input
          value={organization.email}
          onChange={(e) => updateOrganization("email", e.target.value)}
        />
      </div>
    </div>
  )
}
