import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata = {
  title: 'Sahaj Gyawali | Data Scientist Portfolio',
  description: 'Portfolio of Sahaj Gyawali, Aspiring Data Scientist',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <base href="/Portfolio/" />
      </head>
      <body className="bg-[#030712] text-slate-100 min-h-screen antialiased selection:bg-[#64ffda] selection:text-black">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
