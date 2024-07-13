import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { Analytics } from '@vercel/analytics/react';
import ErrorBoundary from '@/components/ErrorBoundary';
import logger from '@/utils/logger';

export default function App({ Component, pageProps }) {
  logger.debug('Rendering App component');
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <>
            <Component {...pageProps} />
            <Toaster />
            <Analytics />
          </>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}