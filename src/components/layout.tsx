import React from 'react'
import { PropsWithChildren } from 'react'
import { Code, NextUIProvider } from '@nextui-org/react'
import Header from './Header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="relative container mx-auto max-w-5xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
          {children}
        </main>
        <footer></footer>
      </div>
    </NextUIProvider>
  )
}

export default Layout
