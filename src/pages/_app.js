import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App({ Component, pageProps }) {
  return (
    <TooltipProvider>
      <>
        <Component {...pageProps} />
        <Toaster />
      </>
    </TooltipProvider>
  );
}