import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <>
          <Component {...pageProps} />
          <Toaster />
          <Analytics />
        </>
      </TooltipProvider>
    </ThemeProvider>
  );
}