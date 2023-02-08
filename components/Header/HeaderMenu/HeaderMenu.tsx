import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import React from 'react'

import styles from './HeaderMenu.module.scss'

import navStyles from '../HeaderModal/Navigation/Navigation.module.scss'

export default function HeaderMenu() {
  return (
    <div className={navStyles.rootNavigation}>
      <Dialog.Trigger asChild>
        <button className={`${styles['menuItem--mobile']} ${styles.mobileMenu}`}>
          <span className={styles.menuTitle}>Menu</span>
          <span className={styles.burgerMenu}>
            <span className={styles.middleLine} />
          </span>
        </button>
      </Dialog.Trigger>
      <ul className={`${styles['menuItem--desktop']} ${navStyles.headerList}`} data-depth="1">
        <li className={navStyles.headerListItem}>
          <Dialog.Trigger asChild>
            <button className={navStyles.headerListDropdown}>Services</button>
          </Dialog.Trigger>
        </li>
        <li className={navStyles.headerListItem}>
          <Link href="/">Get In Touch</Link>
        </li>
      </ul>
    </div>
  )
}
