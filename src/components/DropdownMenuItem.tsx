import { MenuItem } from '@headlessui/react'
import React from 'react'
import type { ReactNode } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: ReactNode
}

export default function DropdownMenuItem({ href, children }: Props) {
  return (
    <MenuItem>
      {({ focus }) => (
        <a
          href={href}
          className={classNames(
            focus ? 'bg-orange-200 dark:bg-zinc-700' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {children}
        </a>
      )}
    </MenuItem>
  )
}
