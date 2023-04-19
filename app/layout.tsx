import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'TODO list',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='h-screen bg-gray'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
