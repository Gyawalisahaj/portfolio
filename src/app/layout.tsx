import './globals.css'

export const metadata = {
  title: 'SAHAJ GYAWALI',
  description: 'CSIT Student Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href="/sahaj/" />
      </head>
      <body className="bg-[#0a192f] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  )
}
