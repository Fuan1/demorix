import { ReactNode } from 'react';

import AppLayout from '@/app/components/AppLayout';
import EmotionProvider from '@/app/components/providers/EmotionProvider';
import { baseMetadata } from '@/app/seo/metadata';

export const metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        <EmotionProvider>
          <AppLayout>{children}</AppLayout>
        </EmotionProvider>
      </body>
    </html>
  );
}
