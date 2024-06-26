import withTM from 'next-transpile-modules'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TODO: Define type of publicRuntimeConfig
  publicRuntimeConfig: {
    PAGE_TITLE: 'Job Trend Analyzer'
  },
};

// node_modules using SASS/SCSS needs to be wrapped in next-transpile-modules
const withTMWrapper = withTM([
  '@takumakira-individual/tk-ui-react-v2.themes.colors',
  '@takumakira-individual/tk-ui-react-v2.ui.nav-bar',
]);
export default withTMWrapper(nextConfig);
