import './globals.css'

export const metadata = {
  title: 'SAHAJ GYAWALI | Portfolio',
  description: 'Front End Developer Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href="/portfolio/" />
      </head>
      <body className="bg-[#0a192f] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
