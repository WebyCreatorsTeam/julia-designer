export const metadata = {
    title: 'Логин',
    description: 'Логин',

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
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}