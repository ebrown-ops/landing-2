import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

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
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Products</Button>
              <Button variant="ghost">Contact</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}