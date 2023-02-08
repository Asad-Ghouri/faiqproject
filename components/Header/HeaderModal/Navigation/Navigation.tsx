import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import React from 'react'

import styles from './Navigation.module.scss'

function recursiveMenuItems({ depth }: { depth: number; forceMount?: true }) {
  return (
    <>
      <NavigationMenu.List className={`${styles.headerList} reset`} data-depth={depth}>
        <NavigationMenu.Item className={styles.headerListItem}>
          <NavigationMenu.Trigger
            className={styles.headerListSingle}
            data-depth={depth}
            onPointerMove={event => event.preventDefault()}
            onPointerLeave={event => event.preventDefault()}
          >
            <span>Services</span>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content
            className={styles.headerContent}
            onInteractOutside={e => e.preventDefault()}
            forceMount
          >
            <NavigationMenu.List className={`${styles.headerList} reset`} data-depth="2">
              <NavigationMenu.Item className={styles.headerListItem}>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 2
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 3
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 4
                </NavigationMenu.Link>

                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 2
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 3
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 4
                </NavigationMenu.Link>

                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 2
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 3
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 4
                </NavigationMenu.Link>

                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 2
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 3
                </NavigationMenu.Link>
                <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="2">
                  Test 4
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item className={styles.headerListItem}>
          <NavigationMenu.Link className={styles.headerListSingle} href="/" data-depth="1">
            Get In Touch
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      {depth < 4 && <NavigationMenu.Viewport forceMount onPointerLeave={e => e.preventDefault()} />}
    </>
  )
}

export default function Navigation() {
  const depth = 1

  return (
    <NavigationMenu.Root className={styles.rootNavigation} orientation="vertical">
      {recursiveMenuItems({
        depth,
      })}
    </NavigationMenu.Root>
  )
}
