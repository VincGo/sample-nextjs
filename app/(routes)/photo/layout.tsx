import React from "react";

export default function PhotoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>{children}</section>
  )
}
