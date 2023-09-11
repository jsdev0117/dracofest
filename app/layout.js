'use client'
import Navbar from './components/Navbar'
import { FirebaseProvider } from './context/firebaseContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloProvider } from "@apollo/client";
import Client from './apollo'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirebaseProvider>
          <ApolloProvider client={Client()}>
            <Navbar />
            {children}
          </ApolloProvider>
        </FirebaseProvider>
      </body>
    </html>
  )
}
