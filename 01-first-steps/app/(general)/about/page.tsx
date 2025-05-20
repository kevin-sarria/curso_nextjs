import { Metadata } from "next"


export const metadata: Metadata = {
    title: 'About',
    description: 'SEO Title',
    keywords: ['About Page', 'Kevin', 'informacion', '...'],
}

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">AboutPage</span>
    </>
  )
}