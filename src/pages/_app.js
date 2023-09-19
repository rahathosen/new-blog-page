import "@/styles/globals.css";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps, children }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" >
        <Component {...pageProps}>
          <main
            className={` bg-white dark:bg-[#040D12] `}
          >
            {children}
          
          </main>
          </Component >
      </ThemeProvider>
    </>
  );
}
