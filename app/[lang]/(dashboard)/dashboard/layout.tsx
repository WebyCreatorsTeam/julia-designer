import Link from "next/link"

export const metadata = {
  title: 'Админ Панель',
  description: 'Админка',

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  }
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
      <html lang="ru">
        <body>
          <nav>
            <Link href="/dashboard/about">About</Link>
          </nav>
          <main>
            {children}
          </main>
        </body>
      </html>
  )
}
