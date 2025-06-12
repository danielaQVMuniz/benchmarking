import './globals.css'

import CssBaseline from '@mui/material/CssBaseline'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@mui/material'
import theme from '@/lib/theme'
import StyledComponentsRegistry from '@/lib/registry'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Energy Benchmarking',
  description: 'Benchmarking',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <CssBaseline />

        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>

        <Analytics />
      </body>
    </html>
  )
}
