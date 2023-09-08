'use client'

import { ThemeProvider } from 'next-themes';
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
}
