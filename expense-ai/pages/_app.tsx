import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ExpenseAI - AI-Powered Expense Management</title>
        <meta name="description" content="AI-powered expense management with computer vision receipt scanning and intelligent categorization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="expense management, AI, computer vision, receipt scanning, financial analytics, small business, automation" />
        <meta name="author" content="Vinesh Thota" />
        <meta property="og:title" content="ExpenseAI - AI-Powered Expense Management" />
        <meta property="og:description" content="Scan receipts, categorize automatically, get insights instantly with AI-powered expense management" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ExpenseAI - AI-Powered Expense Management" />
        <meta name="twitter:description" content="Scan receipts, categorize automatically, get insights instantly" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}