import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact',
    description: 'SEO Description',
    keywords: ['About Page', 'Kevin', 'informacion', '...'],
}

export default function ContactPage() {
  return (
    <>
        <span className="text-7xl">ContactPage</span>
    </>
  )
}
