import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();

  return (
    <header className="w-full py-4 bg-white shadow-md flex justify-between items-center px-8">
      <div className="font-bold text-2xl text-orange-600">rdv<span className="text-orange-500">.ae</span></div>
      <nav className="flex gap-6">
        <Link href="/">
          Home
        </Link>
        <Link href="/about-us">
          About Us
        </Link>
        <Link href="/services">
          Services
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
} 