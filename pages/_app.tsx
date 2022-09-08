import type { AppProps } from "next/app";
import { defaultTheme } from "../styles/theme/default";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderM5 } from "@mui/material/styles";
import { GlobalStyle } from "../src/@types/global";
import theme from "../styles/theme/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Renato Roessler</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <ThemeProviderM5 theme={theme}>
          <ToastContainer />
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProviderM5>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
