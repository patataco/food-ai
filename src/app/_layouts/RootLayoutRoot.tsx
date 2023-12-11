import '~/styles/globals.css';

import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import React from 'react';

import { TRPCReactProvider } from '~/trpc/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayoutRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} flex h-screen flex-col bg-gray-100`}>
        <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
