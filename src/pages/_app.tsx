import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Colors, colorsTokensDark } from '@takumakira-individual/tk-ui-react-v2.themes.colors';
import { useThemeSwitcher, Theme } from '@takumakira-individual/tk-ui-react-v2.hooks.use-theme-switcher';
import { ApiQueryClientProvider } from '@takumakira-individual/tk-ui-react-v2.hooks.use-api';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const theme = useThemeSwitcher()
  return (
    <ApiQueryClientProvider>
      <Colors overrides={theme === Theme.DARK ? colorsTokensDark : undefined}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Colors>
    </ApiQueryClientProvider>
  );
}
