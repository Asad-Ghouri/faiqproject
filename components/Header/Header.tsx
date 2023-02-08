import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import React from 'react'

import styles from './Header.module.scss'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import HeaderModal from './HeaderModal/HeaderModal'

export default function Header() {
  return (
    <Dialog.Root>
      <Dialog.Overlay className={styles.overlay} />
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <div className={styles.logo} />
          </Link>
          <HeaderMenu />
          <HeaderModal />
        </div>
      </header>
    </Dialog.Root>
  )
}
