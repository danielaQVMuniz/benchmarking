import './globals.css'

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import CssBaseline from '@mui/material/CssBaseline'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
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
        <InitColorSchemeScript attribute="class" />
        <CssBaseline />

        <StyledComponentsRegistry>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </StyledComponentsRegistry>

        <Analytics />
      </body>
    </html>
  )
}
