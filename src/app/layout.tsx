import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HIS AI OPD Check-in Starter',
  description: 'Training starter for AI-assisted product development',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
