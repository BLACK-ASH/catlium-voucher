export interface Organization {
  name: string
  address: string
  phone: string
  email: string
  logo?: File | null
}

export interface VoucherImage {
  id: string
  file: File
  preview: string
}

export interface Voucher {
  organization: Organization

  date: string

  amount: string

  description: string

  remark: string

  images: VoucherImage[]
}
