import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">SBG Funding</h1>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Products</Button>
          <Button variant="ghost">Contact</Button>
          <ModeToggle />
        </nav>
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="outline" className="ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Products</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>
      )}
    </header>
  )
}