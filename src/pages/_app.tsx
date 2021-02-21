import { ThemeProvider } from 'styled-components';
import Page from '../components/Layout/DefaultLayoutPage';
import { CustomersProvider } from "../context/customers";
import GlobalStyle from '../styles/global';
import themes from '../styles/themes'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themes}>
        <CustomersProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CustomersProvider>
      </ThemeProvider>
    </>
  )
}

