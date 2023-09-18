import "@/styles/globals.css";
import { Provider } from "./components/provider";

export default function App({ Component, pageProps, children }) {
  return (
    <>
      <Provider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps}>
          <main
            className={` bg-white dark:bg-[#040D12] `}
          >
            {children}
          </main>
          </Component >
      </Provider>
    </>
  );
}
