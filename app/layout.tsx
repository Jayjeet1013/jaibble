export const metadata = {
  title: 'Jaible',
  description: 'Best Webiste Designs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
