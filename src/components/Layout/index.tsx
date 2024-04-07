import getConfig from 'next/config'
import classNames from 'classnames';
import { NavBar } from '@takumakira-individual/tk-ui-react-v2.ui.nav-bar';
import styles from './index.module.scss';

const { publicRuntimeConfig } = getConfig()

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classNames(styles.container)}>
      <NavBar>{publicRuntimeConfig.PAGE_TITLE}</NavBar>
      <main>{children}</main>
    </div>
  )
}
