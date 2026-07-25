"use client"

import Image from "next/image"

import { Organization } from "@/types/voucher"

interface Props {
  organization: Organization
}

export function LetterHead({ organization }: Props) {
  return (
    <div className="mb-4 flex items-center gap-4 border-b pb-4 text-black">
      {organization.logo && (
        <Image
          src={URL.createObjectURL(organization.logo)}
          width={70}
          height={70}
          alt="logo"
          className="object-contain"
        />
      )}

      <div>
        <h1 className="text-xl font-bold text-black">
          {organization.name || "Organization Name"}
        </h1>

        <p className="text-sm">{organization.address}</p>

        <p className="text-sm">
          {organization.phone}
          {" | "}
          {organization.email}
        </p>
      </div>
    </div>
  )
}
