import type { Metadata } from 'next'
import { Quicksand, Lexend } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const quicksand = Quicksand({
    variable: '--font-quicksand',
    subsets: ['latin'],
})

const lexend = Lexend({
    variable: '--font-lexend',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'PaPa Phoenix',
    description: 'From Valorant to the World',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <body
                className={`${quicksand.variable} ${lexend.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem

                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
