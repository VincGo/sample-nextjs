import './_styles/global.scss';
import NavBar from "@/molecules/navbar/NavBar";
import { Providers } from '@/providers';
import React from "react";

const items = [
  {
    href: '/newsletter',
    name: 'Newsletter'
  },
  {
    href: '/photo',
    name: 'Photos'
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar image={'/images/logo-mlp.svg'} items={items} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
