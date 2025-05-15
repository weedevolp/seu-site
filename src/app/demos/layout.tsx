import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Link from "next/link"

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Demonstrações - WeeDev",
  description: "Exemplos de sites desenvolvidos pela WeeDev",
}

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={poppins.className}>
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/"
          className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors"
        >
          ← Voltar ao site
        </Link>
      </div>
      {children}
    </div>
  )
}
