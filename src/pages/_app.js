import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <TooltipProvider>
      <>
        <Component {...pageProps} />
        <Toaster />
        <Analytics />
      </>
    </TooltipProvider>
  );
}