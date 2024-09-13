import GlobalStyle from "@/styles/globals"; // Se usar styled-components, importe o estilo global como componente
import type { AppProps } from "next/app";
import { Golos_Text } from 'next/font/google';

const golosText = Golos_Text({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={golosText.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
