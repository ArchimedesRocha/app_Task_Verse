import GlobalStyle from "@/styles/globals"; // Se usar styled-components, importe o estilo global como componente
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Golos_Text } from 'next/font/google';
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react"

const golosText = Golos_Text({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isSignInPage = router.pathname === "/signIn"
  return (
    <div className={golosText.className}>
      <SessionProvider session={pageProps.session}>

        {!isSignInPage && (
          <div className="container">
            <Header />
          </div>
        )

        }
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}
