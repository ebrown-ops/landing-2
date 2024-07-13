import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const DynamicModeToggle = dynamic(() => import('./ModeToggle'), { ssr: false });

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm" role="banner">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">SBG Funding</h1>
        </Link>
        <nav className="hidden md:flex items-center space-x-4" role="navigation">
          <Link href="/about" passHref>
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/products" passHref>
            <Button variant="ghost">Products</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost">Contact</Button>
          </Link>
          <DynamicModeToggle />
        </nav>
        <div className="flex items-center md:hidden">
          <DynamicModeToggle />
          <Button variant="outline" className="ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 py-4" role="navigation">
          <Link href="/about" passHref>
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="/products" passHref>
            <Button variant="ghost">Products</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost">Contact</Button>
          </Link>
        </nav>
      )}
    </header>
  )
}