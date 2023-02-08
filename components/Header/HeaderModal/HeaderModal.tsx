import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import React from 'react'

import styles from './HeaderModal.module.scss'
import Navigation from './Navigation/Navigation'

import headerStyles from '../Header.module.scss'

export default function HeaderModal() {
  return (
    <Dialog.Content className={styles.content}>
      <div className={headerStyles.container}>
        <Link href="/">
          <div className={styles.logo} />
        </Link>
        <Navigation />
      </div>
      <Dialog.Close asChild>
        <button className={styles.close}>
          <span className={styles.closeIcon} />
        </button>
      </Dialog.Close>
    </Dialog.Content>
  )
}
