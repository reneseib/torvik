import '../styles/globals.scss'

import LayoutPublic from '../layouts/LayoutPublic';

export default function App({ Component, pageProps }) {
  return (
    <LayoutPublic>
      <Component {...pageProps} />
    </LayoutPublic>
  )
}
