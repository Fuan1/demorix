import { ReactNode } from 'react';

import AppLayout from '@/components/AppLayout';
import { baseMetadata } from '@/seo/metadata';
import './globals.css';

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
