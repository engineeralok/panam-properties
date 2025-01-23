import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-navy">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}