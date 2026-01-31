import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intelligent Travel Agent | Pakistan',
  description: 'Your smart travel companion for exploring Pakistan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900`}>
        {/* Multi-color gradient background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-emerald-50 to-purple-50"></div>
          
          {/* Gradient overlays for depth */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {/* Particle 1 */}
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
            <div className="particle particle-7"></div>
            <div className="particle particle-8"></div>
            <div className="particle particle-9"></div>
            <div className="particle particle-10"></div>
            <div className="particle particle-11"></div>
            <div className="particle particle-12"></div>
            <div className="particle particle-13"></div>
            <div className="particle particle-14"></div>
            <div className="particle particle-15"></div>
            <div className="particle particle-16"></div>
            <div className="particle particle-17"></div>
            <div className="particle particle-18"></div>
            <div className="particle particle-19"></div>
            <div className="particle particle-20"></div>
          </div>
        </div>

        {/* Content with frosted glass effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-b from-white/70 via-transparent to-white/30 backdrop-blur-sm"></div>
          <main className="relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}