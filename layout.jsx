import './globals.css';

export const metadata = {
  title: 'ROVIX - Premium Leather Goods',
  description: 'Handcrafted luxury leather products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
